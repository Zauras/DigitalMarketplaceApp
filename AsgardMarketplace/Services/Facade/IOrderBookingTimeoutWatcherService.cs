using AsgardMarketplace.Services.DomainModels;

namespace AsgardMarketplace.Services.Facade
{
    public interface IOrderBookingTimeoutWatcherService
    {
        public bool StartBookingTimeout(OrderBookingModel orderBooking);

        public event OrderBookingTimeoutWatcherService.OrderBookingTimeoutHandler
            OrderBookingTimeout;

    }
}