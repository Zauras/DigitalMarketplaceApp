#nullable enable
using System;
using System.Collections.Generic;
using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels;

namespace AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.Facade
{
    public interface IOrderRepository
    {
        public IEnumerable<OrderEntity> GetSellingOrders(int userId);
        public IEnumerable<OrderEntity> GetBuyingOrders(int userId);
        public IEnumerable<OrderEntity> GetAllByUserId(int userId);
        public IEnumerable<int> GetOrderedItemsIds();
        public OrderEntity? GetOrderByItemId(int itemId);
        public (int, DateTime) CreateOrder(int itemId, int sellerId, int buyerId);
        public bool SetOrderStatusPaid(int orderId);
        public bool SetOrderStatusCanceled(int orderId);

    }
}