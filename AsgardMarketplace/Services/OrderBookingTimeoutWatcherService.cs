using System;
using System.Collections.Concurrent;
using System.Linq;
using System.Reactive.Linq;
using System.Threading;

using AsgardMarketplace.Services.DomainModels;
using AsgardMarketplace.Services.Facade;

namespace AsgardMarketplace.Services
{
    public class OrderBookingTimeoutWatcherService : IOrderBookingTimeoutWatcherService
    {
        private readonly TimeSpan _orderBookingTimeoutMs 
            = new TimeSpan(2, 0, 0);

        private readonly IOrderService _orderService;
        
        // Safe since using service as Singleton
        private ConcurrentDictionary<int, DateTime> _orderBookings =
            new ConcurrentDictionary<int, DateTime>();

        public OrderBookingTimeoutWatcherService(IOrderService orderService)
        {
            _orderService = orderService;
            StartBookingTimeoutsWatcher();
        }

        public bool StartBookingTimeout(OrderBookingModel orderBooking) =>
            _orderBookings.TryAdd(orderBooking.OrderId, orderBooking.OrderTime);
        
        private void StartBookingTimeoutsWatcher()
        {
            IDisposable watcher = null;
            watcher = Observable
                .Timer(TimeSpan.Zero, TimeSpan.FromSeconds(10))
                .Take(1)
                .Subscribe(_ =>
                {
                    CheckBookingTimeouts();
                }, () =>
                {
                    watcher?.Dispose();
                    StartBookingTimeoutsWatcher();
                });
        }

        private void CheckBookingTimeouts() 
        {
            while (true)
            {
                DateTime nowTime = new DateTime();
                _orderBookings.ToList().ForEach(booking =>
                {
                    if (nowTime - booking.Value >= _orderBookingTimeoutMs)
                    {
                        _orderService.CancelOrder(booking.Key);
                    
                        var orderTime = booking.Value;
                        _orderBookings.TryRemove(booking.Key, out orderTime);
                    }
                });
                Thread.Sleep(1000);
            }
            // ReSharper disable once FunctionNeverReturns
        }
        
    }
}