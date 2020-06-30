using System;

namespace AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels
{
    public class OrderEntity
    {
        public int Id { get; set; }
        
        public int SellerId { get; set; }
        
        public int BuyerId { get; set; }
        
        public int ItemId { get; set; }
        
        public StatusType StatusId { get; set; }
        
        public DateTime OrderTime { get; set; }

    }
}