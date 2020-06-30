using System.Collections.Generic;
using AsgardMarketplace.Services.DomainModels;

namespace AsgardMarketplace.Services.Facade
{
    public interface IMarketplaceService
    {
        public IEnumerable<MarketplaceItemModel> GetMarketplaceItems();
        public IEnumerable<MarketplaceItemModel> GetUserItemsOnMarket(int userId);
        
    }
}