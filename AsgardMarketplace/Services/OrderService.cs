using System.Collections.Generic;
using System.Linq;

using AsgardMarketplace.Services.DomainModels;
using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.Facade;
using AsgardMarketplace.Services.Facade;


namespace AsgardMarketplace.Services
{
    public class OrderService : IMarketplaceService
    {
        private readonly IUnitOfWork _asgardMarketplaceUnitOfWork;
        
        public OrderService(IUnitOfWork asgardMarketplaceUnitOfWork)
        {
            _asgardMarketplaceUnitOfWork = asgardMarketplaceUnitOfWork;
        }
        
        
        public IEnumerable<MarketplaceItemModel> GetMarketplaceItems()
        {
            var marketplaceItemsEntities = 
                _asgardMarketplaceUnitOfWork.OrderRepository.GetUserOreder(userId);
            
            return marketplaceItemsEntities.Select(MarketplaceItemModel.ToModel);
        }
    }
}

