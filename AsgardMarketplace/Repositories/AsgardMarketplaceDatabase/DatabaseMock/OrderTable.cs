using System;
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
                ItemId = 1,
                StatusId = 2,
                OrderTime = new DateTime(2020, 6, 20, 19, 10, 9)
            },
            new OrderEntity
            {
                Id = 2,
                BuyerId = 3,
                SellerId = 1,
                ItemId = 2,
                StatusId = 3,
                OrderTime = new DateTime(2020, 6, 26, 8, 4, 9)
            },
            new OrderEntity
            {
                Id = 3,
                BuyerId = 2,
                SellerId = 1,
                ItemId = 3,
                StatusId = 2,
                OrderTime = new DateTime(2020, 6, 28, 12, 6, 9)
            },
            new OrderEntity
            {
                Id = 4,
                BuyerId = 5,
                SellerId = 1,
                ItemId = 4,
                StatusId = 2,
                OrderTime = new DateTime(2020, 6, 20, 19, 10, 9)
            },
            new OrderEntity
            {
                Id = 5,
                BuyerId = 3,
                SellerId = 1,
                ItemId = 5,
                StatusId = 3,
                OrderTime = new DateTime(2020, 6, 26, 8, 4, 9)
            },
            new OrderEntity
            {
                Id = 6,
                BuyerId = 1,
                SellerId = 2,
                ItemId = 6,
                StatusId = 2,
                OrderTime = new DateTime(2020, 6, 28, 12, 6, 9)
            },
            new OrderEntity
            {
                Id = 7,
                BuyerId = 1,
                SellerId = 2,
                ItemId = 7,
                StatusId = 2,
                OrderTime = new DateTime(2020, 6, 20, 19, 10, 9)
            },
            
        };
    }
}