using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels;

namespace AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DatabaseMock
{
    static class MarketplaceItemTable
    {
        public static readonly MarketplaceItemEntity[] Entities = 
        {
            new MarketplaceItemEntity
            {
                Id = 1,
                Image = "",
                Name = "Thor's Hammer - Mjölnir",
                Description = "Buy and give some hammering",
                Price = 18.5f
            },
            new MarketplaceItemEntity
            {
                Id = 2,
                Image = "",
                Name = "Loki's The Green Mask",
                Description = "Be Da Great Green Prophet",
                Price = 18.5f
            },
            new MarketplaceItemEntity
            {
                Id = 3,
                Image = "",
                Name = "Freya's sword",
                Description = "Slash with ice and love",
                Price = 18.5f
            }
        };
    }
}