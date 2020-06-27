namespace AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels
{
    
    public enum StatusType
    {
        InMarketplace = 1,
        Booked = 2,
        Paid = 3,
        Shipped = 4,
        Completed = 5,
        Canceled = 6,
        Unknown = 7
    }


    public class OrderStatusEntity
    {
        public StatusType Id { get; }
        public string Type { get; }

        public OrderStatusEntity(StatusType statusType)
        {
            Id = statusType;
            Type = GetStatusTypeLiteral(statusType);
        }

        static string GetStatusTypeLiteral(StatusType statusType)
        {
            switch (statusType)
            {
                case StatusType.InMarketplace: return "In Marketplace";
                case StatusType.Booked: return "Booked";
                case StatusType.Paid: return "Paid";
                case StatusType.Shipped: return "Shipped";
                case StatusType.Completed: return "Completed";
                case StatusType.Canceled: return "Canceled";
                default: return "Unknown";
            }
        }

    }
}