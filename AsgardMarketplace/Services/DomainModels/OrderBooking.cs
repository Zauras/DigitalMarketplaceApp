using System;

namespace AsgardMarketplace.Services.DomainModels
{
    public class OrderBookingModel
    {
        public OrderBookingModel(int orderId, DateTime orderTime)
        {
            OrderId = orderId;
            OrderTime = orderTime;
        }
        
        public int OrderId { get; }
        public DateTime OrderTime { get; }
    }
}