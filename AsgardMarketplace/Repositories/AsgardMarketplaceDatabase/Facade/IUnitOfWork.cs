using AsgardMarketplace.Repositories.Utils;

namespace AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.Facade
{
    public interface IUnitOfWork : IUnitOfWorkBase
    {
        IMarketplaceItemRepository MarketplaceItemRepository { get; }
        
    }
}