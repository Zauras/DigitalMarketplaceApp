using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels;

namespace AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DatabaseMock
{
    static class OrderTable
    {
        public static readonly OrderEntity[] Entities = 
        {
            new OrderEntity
            {
                Id = 1,
                BuyerId = 2,
                SellerId = 1,
                ItemId = 5,
                StatusId = 2
                
            },
            new OrderEntity
            {
                Id = 1,
                BuyerId = 3,
                SellerId = 1,
                ItemId = 5,
                StatusId = 3
            },
            new OrderEntity
            {
                Id = 1,
                BuyerId = 4,
                SellerId = 1,
                ItemId = 5,
                StatusId = 2
            }
        };
    }
}