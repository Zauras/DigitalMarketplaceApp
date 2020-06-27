
using System.Collections.Generic;
using AsgardMarketplace.Repositories.Utils;
using AsgardMarketplace.Services.DomainModels;

namespace AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.Facade
{
    public interface IUnitOfWork : IUnitOfWorkBase
    {
        IMarketplaceItemRepository MarketplaceItemRepository { get; }
        IOrderRepository OrderRepository { get; }
        IUserRepository UserRepository { get; }

        public IEnumerable<OrderModel> GetUserSellingOrders(int userId);

        public IEnumerable<OrderModel> GetUserBuyingOrders(int userId);

    }
}