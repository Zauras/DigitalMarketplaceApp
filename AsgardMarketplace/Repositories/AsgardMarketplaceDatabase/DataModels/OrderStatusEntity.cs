namespace AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels
{
    
    public enum StatusType
    {
        Booked = 1,
        Paid = 2,
        Shipped = 3,
        Completed = 4,
        Canceled = 5,
        Unknown = 6
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