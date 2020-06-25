
namespace AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels
{
    public enum StatusType
    {
        InMarketplace = 1,
        Booked = 2,
        Paid = 3,
        Shipped = 4,
        Received = 5,
        Canceled = 6
    }
    
    public class StatusEntity
    {
        public int Id { get; set; }
        
        public StatusType Type { get; set; }
    }
}