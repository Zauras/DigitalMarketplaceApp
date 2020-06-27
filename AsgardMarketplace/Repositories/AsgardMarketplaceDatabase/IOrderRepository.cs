using System.Collections.Generic;
using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels;

namespace AsgardMarketplace.Repositories.AsgardMarketplaceDatabase
{
    public interface IOrderRepository
    {
        public IEnumerable<OrderEntity> GetSellingOrders(int userId);
        public IEnumerable<OrderEntity> GetBuyingOrders(int userId);
        public IEnumerable<OrderEntity> GetAllByUserId(int userId);
        
    }
}