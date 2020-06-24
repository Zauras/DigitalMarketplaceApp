﻿using System;
using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.Facade;
using AsgardMarketplace.Repositories.Utils;

 namespace AsgardMarketplace.Repositories.AsgardMarketplaceDatabase
{
    public class UnitOfWork : BaseUnitOfWork, IUnitOfWork
    {
        private readonly Lazy<IMarketplaceItemRepository> _marketplaceItemRepository;
        
        public IMarketplaceItemRepository MarketplaceItemRepository => _marketplaceItemRepository.Value;
        

        public UnitOfWork(string connectionString) : base(connectionString)
        {
            _marketplaceItemRepository = new Lazy<IMarketplaceItemRepository>(
                () => new MarketplaceItemRepository(Connection)
            );
        }
    }
}
