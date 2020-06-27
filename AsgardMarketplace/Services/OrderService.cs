using System.Collections.Generic;
using AsgardMarketplace.Services.DomainModels;
using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.Facade;
using AsgardMarketplace.Services.Facade;


namespace AsgardMarketplace.Services
{
    public class OrderService : IOrderService
    {
        private readonly IUnitOfWork _asgardMarketplaceUnitOfWork;
        
        public OrderService(IUnitOfWork asgardMarketplaceUnitOfWork)
        {
            _asgardMarketplaceUnitOfWork = asgardMarketplaceUnitOfWork;
        }

        public IEnumerable<OrderModel> GetUserSellingOrders(int userId) =>
            _asgardMarketplaceUnitOfWork.GetUserSellingOrders(userId);
        
        public IEnumerable<OrderModel> GetUserBuyingOrders(int userId) =>
            _asgardMarketplaceUnitOfWork.GetUserBuyingOrders(userId);
        
    }
}

