using System.Collections.Generic;
using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels;

namespace AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.Facade
{
    public interface IMarketplaceItemRepository
    {
        public MarketplaceItemEntity[] GetAll();
        
        public IEnumerable<MarketplaceItemEntity> GetAllInIds(IEnumerable<int> itemIds);
        
        public IEnumerable<MarketplaceItemEntity> GetItemsExcludedFromIds(IEnumerable<int> excludedItemsIds);

        public MarketplaceItemEntity GetItem(int itemId);

    }
}