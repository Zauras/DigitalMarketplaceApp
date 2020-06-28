using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

using AsgardMarketplace.Repositories.Utils;
using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DatabaseMock;
using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels;
using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.Facade;


namespace AsgardMarketplace.Repositories.AsgardMarketplaceDatabase
{

    public class OrderRepository : BaseRepository, IOrderRepository
    {
        public OrderRepository(SqlConnection connection) : base(connection) {}
        
        
        public IEnumerable<OrderEntity> GetSellingOrders(int userId) =>
            OrderTable.Entities.Where(order => order.SellerId == userId);
        
        public IEnumerable<OrderEntity> GetBuyingOrders(int userId) =>
            OrderTable.Entities.Where(order => order.BuyerId == userId);

        public IEnumerable<OrderEntity> GetAllByUserId(int userId) =>
            OrderTable.Entities.Where(order => order.BuyerId == userId || order.SellerId == userId);
        
        public IEnumerable<int> GetOrderedItemsIds() =>
            OrderTable.Entities.Select(order => order.ItemId);
        
        public OrderEntity GetOrderByItemId(int itemId) => 
            OrderTable.Entities.FirstOrDefault(order => order.ItemId == itemId);

        public (int, DateTime) CreateOrder(int itemId, int sellerId, int buyerId)
        {
            int id = OrderTable.Entities.Max(order => order.Id) + 1;
            DateTime orderTime = new DateTime();
            
            OrderTable.Entities.Add(new OrderEntity
            {
                Id = id,
                ItemId = itemId,
                SellerId = sellerId,
                BuyerId = buyerId,
                StatusId = StatusType.Booked,
                OrderTime = orderTime
            });
            
            return (id, orderTime);
        }

        public bool SetOrderStatusPaid(int orderId) => SetOrderStatus(orderId, StatusType.Paid);

        public bool SetOrderStatusCanceled(int orderId) => SetOrderStatus(orderId, StatusType.Canceled);

        
        private bool SetOrderStatus(int orderId, StatusType status)
        {
            var targetedOrder = OrderTable.Entities.FirstOrDefault(order => order.Id == orderId);
            if (targetedOrder == null) return false;

            OrderTable.Entities.ForEach(order =>
            {
                if (order.Id == orderId)
                {
                    order.StatusId = status;
                }
            });

            return true;
        }
    }
}