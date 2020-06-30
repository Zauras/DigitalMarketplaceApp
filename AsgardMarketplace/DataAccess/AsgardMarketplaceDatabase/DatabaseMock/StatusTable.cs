using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels;

namespace AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DatabaseMock
{

    public class StatusTable
    {
        public static readonly OrderStatusEntity[] Entities =
        {
            new OrderStatusEntity(StatusType.Booked),
            new OrderStatusEntity(StatusType.Paid),
            new OrderStatusEntity(StatusType.Shipped),
            new OrderStatusEntity(StatusType.Completed),
            new OrderStatusEntity(StatusType.Canceled),
            new OrderStatusEntity(StatusType.Unknown)
        };
    }
}