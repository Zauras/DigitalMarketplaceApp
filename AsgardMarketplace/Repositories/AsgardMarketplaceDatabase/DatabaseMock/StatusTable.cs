using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels;

namespace AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DatabaseMock
{

    public class StatusTable
    {
        public static readonly StatusEntity[] Entities =
        {
            new StatusEntity
            {
                Id = 1,
                Type = StatusType.InMarketplace
            },
            new StatusEntity
            {
                Id = 2,
                Type = StatusType.Booked
            },
            new StatusEntity
            {
                Id = 3,
                Type = StatusType.Paid
            },
            new StatusEntity
            {
                Id = 4,
                Type = StatusType.Shipped
            },
            new StatusEntity
            {
                Id = 5,
                Type = StatusType.Received
            },
            new StatusEntity
            {
                Id = 6,
                Type = StatusType.Canceled
            },
        };
    }
}