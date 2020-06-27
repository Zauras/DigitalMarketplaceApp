using System.Collections.Generic;
using System.Linq;

using AsgardMarketplace.Services.DomainModels;
using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.Facade;
using AsgardMarketplace.Services.Facade;


namespace AsgardMarketplace.Services
{
    public class MarketplaceService : IMarketplaceService
    {
        private readonly IUnitOfWork _asgardMarketplaceUnitOfWork;
        
        public MarketplaceService(IUnitOfWork asgardMarketplaceUnitOfWork)
        {
            _asgardMarketplaceUnitOfWork = asgardMarketplaceUnitOfWork;
        }
        
        
        public IEnumerable<MarketplaceItemModel> GetMarketplaceItems()
        {
            var marketplaceItemsEntities = 
                _asgardMarketplaceUnitOfWork.MarketplaceItemRepository.GetAll();
            
            return marketplaceItemsEntities.Select(MarketplaceItemModel.ToDomainModel);
        }
    }
}

