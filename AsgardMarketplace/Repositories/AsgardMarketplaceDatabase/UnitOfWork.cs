﻿using System;
using System.Collections.Generic;
using System.Linq;

using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels;
using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.Facade;
using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.RepoDto;
using AsgardMarketplace.Repositories.Utils;
using AsgardMarketplace.Services.DomainModels;
 
namespace AsgardMarketplace.Repositories.AsgardMarketplaceDatabase
{
    public class UnitOfWork : BaseUnitOfWork, IUnitOfWork
    {
#region Private Variables
        private readonly Lazy<IMarketplaceItemRepository> _marketplaceItemRepository;
        private readonly Lazy<IOrderRepository> _orderRepository;
        private readonly Lazy<IOrderStatusRepository> _orderStatusRepository;
        private readonly Lazy<IUserRepository> _userRepository;
#endregion  
        
#region Public Variables
        public IMarketplaceItemRepository MarketplaceItemRepository => _marketplaceItemRepository.Value;
        public IOrderRepository OrderRepository => _orderRepository.Value;
        public IOrderStatusRepository OrderStatusRepository => _orderStatusRepository.Value;
        public IUserRepository UserRepository => _userRepository.Value;
#endregion 

        public UnitOfWork(string connectionString) : base(connectionString)
        {
            _marketplaceItemRepository = new Lazy<IMarketplaceItemRepository>(
                () => new MarketplaceItemRepository(Connection)
            );
            
            _orderRepository = new Lazy<IOrderRepository>(
                () => new OrderRepository(Connection)
            );
            
            _orderStatusRepository = new Lazy<IOrderStatusRepository>(
                () => new OrderStatusRepository(Connection)
            );
            
            _userRepository = new Lazy<IUserRepository>(
                () => new UserRepository(Connection)
            );
        }

#region InternalQueryMethods
        // In work with real database would return Querables or Monades to send into SQL server for resolving as one query

        private IEnumerable<MarketplaceItemEntity> GetItemsByOrders(IEnumerable<OrderEntity> orders)
        {
            var itemIds = orders.Select(order => order.ItemId);
            return _marketplaceItemRepository.Value.GetAllInIds(itemIds);
        }
        
        private IEnumerable<UserEntity> GetUsersByItems(IEnumerable<MarketplaceItemEntity> items)
        {
            var userIds = items.Select(item => item.OwnerId);
            return _userRepository.Value.GetAllInIds(userIds);
        }

        private IEnumerable<OrderModel> GetUserModelsByItems(
            IEnumerable<OrderEntity> orders,
            IEnumerable<MarketplaceItemEntity> items,
            IEnumerable<UserEntity> users)
        {
            var orderModels = orders.Select(order =>
            {
                var orderStatus = OrderStatusModel.ToDomainModel(
                    _orderStatusRepository.Value.GetStatusById(order.StatusId));
                    
                var itemModel = MarketplaceItemModel.ToDomainModel(
                    items.First(item => item.Id == order.ItemId));

                var recipients = users.FirstOrDefault(user => user.Id == order.BuyerId);
                var recipientsModel = recipients==null ? null : UserModel.ToDomainModel(recipients) ;
                
                return new OrderModel(order.Id, orderStatus, order.OrderTime, itemModel, recipientsModel);
            });

            return orderModels;
        }
        
        private IEnumerable<OrderModel> GetUserOrderModelsByOrderEntities(IEnumerable<OrderEntity> orders)
        {
            var items = GetItemsByOrders(orders);
            var users = GetUsersByItems(items);

            return GetUserModelsByItems(orders, items, users);
        }
        
#endregion
        
#region Facade Query Methods
        
        public IEnumerable<OrderModel> GetUserSellingOrders(int userId)
        {
            var sellingOrders = _orderRepository.Value.GetSellingOrders(userId);
            return GetUserOrderModelsByOrderEntities(sellingOrders);
        }
        
        public IEnumerable<OrderModel> GetUserBuyingOrders(int userId)
        {
            var buyingOrders = _orderRepository.Value.GetBuyingOrders(userId);
            return GetUserOrderModelsByOrderEntities(buyingOrders);
        }
        
        public IEnumerable<MarketplaceItemModel> GetItemsOnMarket()
        {
            var orderedItemsIds = _orderRepository.Value.GetOrderedItemsIds();
            var itemsInMarket = _marketplaceItemRepository.Value
                .GetItemsExcludedFromIds(orderedItemsIds);

            return itemsInMarket.Select(MarketplaceItemModel.ToDomainModel);
        }
        
#endregion

    }
}
