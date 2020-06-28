using System.Collections.Generic;
using AsgardMarketplace.Services.DomainModels;

namespace AsgardMarketplace.Services.Facade
{
    public interface IOrderService
    {
        public IEnumerable<OrderModel> GetUserSellingOrders(int userId);
        public IEnumerable<OrderModel> GetUserBuyingOrders(int userId);
        public int? CreateOrder(int itemId, int buyerId);
        public void CancelOrder(int orderId);
        public bool ReceivePayment(int orderId);
    }
}