using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

using AsgardMarketplace.Repositories.Utils;
using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DatabaseMock;
using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels;
using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.Facade;

namespace AsgardMarketplace.Repositories.AsgardMarketplaceDatabase
{
    public class MarketplaceItemRepository : BaseRepository, IMarketplaceItemRepository
    {
        public MarketplaceItemRepository(SqlConnection connection) : base(connection) {}

        public MarketplaceItemEntity[] GetAll() => MarketplaceItemTable.Entities;

        public IEnumerable<MarketplaceItemEntity> GetAllInIds(IEnumerable<int> itemIds) =>
            MarketplaceItemTable.Entities
                .Where(item => itemIds.Contains(item.Id));

        public IEnumerable<MarketplaceItemEntity> GetItemsExcludedFromIds(
            IEnumerable<int> excludedItemsIds) =>
            MarketplaceItemTable.Entities.Where(item => !excludedItemsIds.Contains(item.Id));

        public MarketplaceItemEntity GetItem(int itemId) =>
            MarketplaceItemTable.Entities.FirstOrDefault(item => item.Id == itemId);

    }
}

 