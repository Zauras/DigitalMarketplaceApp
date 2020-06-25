using System.Collections.Generic;
using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels;

namespace AsgardMarketplace.Repositories.AsgardMarketplaceDatabase
{
    public interface IOrderRepository
    {
        public IEnumerable<OrderEntity> GetSellerOrders();
        public IEnumerable<OrderEntity> GetBuyerOrders();
    }
}