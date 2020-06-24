using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels;

namespace AsgardMarketplace.Repositories.AsgardMarketplaceDatabase
{
    public interface IMarketplaceItemRepository
    {
        public MarketplaceItemEntity[] GetAll();
    }
}