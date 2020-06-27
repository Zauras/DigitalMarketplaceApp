using System;

namespace AsgardMarketplace.Controllers.ApiDto
{
    public class OrderDto
    {
        public int Id { get; set; }
        
        public OrderStatusDto Status { get; set; }
        
        public DateTime OrderTime { get; set; }

        public UserDto Recipient { get; set; }
        
        public MarketplaceItemDto Item { get; set; }
        
    }
}