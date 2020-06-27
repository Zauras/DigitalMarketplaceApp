using System.Collections.Generic;
using AsgardMarketplace.Services.DomainModels;

namespace AsgardMarketplace.Services.Facade
{
    public interface IOrderService
    {
        public IEnumerable<OrderModel> GetUserSellingOrders(int userId);
        public IEnumerable<OrderModel> GetUserBuyingOrders(int userId);
    }
}