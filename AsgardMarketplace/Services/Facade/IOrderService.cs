using System.Collections.Generic;
using AsgardMarketplace.Services.DomainModels;

namespace AsgardMarketplace.Services.Facade
{
    public interface IOrderService
    {
        public IEnumerable<MarketplaceItemModel> GetUserOrders(int userId);
    }
}