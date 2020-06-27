using System.Collections.Generic;

namespace AsgardMarketplace.Controllers.ApiDto
{
    public class UserOrdersDto
    {
        public IEnumerable<OrderDto> SellerOrders { get; set; }
        
        public IEnumerable<OrderDto> BuyerOrders { get; set; }
    }
}