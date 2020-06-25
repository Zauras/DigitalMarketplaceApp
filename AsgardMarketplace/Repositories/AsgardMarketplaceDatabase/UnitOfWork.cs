﻿using System;
 using System.Collections.Generic;
 using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels;
 using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.Facade;
using AsgardMarketplace.Repositories.Utils;

 namespace AsgardMarketplace.Repositories.AsgardMarketplaceDatabase
{
    public class UnitOfWork : BaseUnitOfWork, IUnitOfWork
    {
        private readonly Lazy<IMarketplaceItemRepository> _marketplaceItemRepository;
        private readonly Lazy<IOrderRepository> _orderRepository;
        
        public IMarketplaceItemRepository MarketplaceItemRepository => _marketplaceItemRepository.Value;
        public IOrderRepository OrderRepository => _orderRepository.Value;
        

        public UnitOfWork(string connectionString) : base(connectionString)
        {
            _marketplaceItemRepository = new Lazy<IMarketplaceItemRepository>(
                () => new MarketplaceItemRepository(Connection)
            );
            
            _orderRepository = new Lazy<IOrderRepository>(
                () => new OrderRepository(Connection)
            );
        }
        
        // Query methods
        // In work with real database would return Querables or Monades to send into SQL server for resolving as one query

        // public IEnumerable<OrderEntity>  GetSellerOrders() =>
        // {
        //     _orderRepository.Value.GetSellerOrders();
        // }
        //
        // public int GetBuyerOrders()
        // {
        //
        // }
        
        
    }
}
