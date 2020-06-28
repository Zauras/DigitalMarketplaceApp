using System.Collections.Generic;

using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels;

namespace AsgardMarketplace.Repositories.AsgardMarketplaceDatabase
{
    public interface IMarketplaceItemRepository
    {
        public MarketplaceItemEntity[] GetAll();
        
        public IEnumerable<MarketplaceItemEntity> GetAllInIds(IEnumerable<int> itemIds);
        
        public IEnumerable<MarketplaceItemEntity> GetItemsExcludedFromIds(IEnumerable<int> excludedItemsIds);
    }
}