using System;
using System.Collections.Concurrent;
using System.Linq;
using System.Reactive.Linq;
using System.Threading;

using AsgardMarketplace.Services.DomainModels;
using AsgardMarketplace.Services.Facade;

namespace AsgardMarketplace.Services
{
    public sealed class OrderBookingTimeoutWatcherService : IOrderBookingTimeoutWatcherService
    {
        private const int TickIntervalSeconds = 10;
        
        private readonly TimeSpan _orderBookingTimeoutMs 
            = new TimeSpan(2, 0, 0);

        // Safe since using service as Singleton
        private ConcurrentDictionary<int, DateTime> _orderBookings =
            new ConcurrentDictionary<int, DateTime>();

        public delegate void OrderBookingTimeoutHandler (object source, int orderId);
        public event OrderBookingTimeoutHandler OrderBookingTimeout;

        public OrderBookingTimeoutWatcherService()
        {
            StartBookingTimeoutsWatcher();
        }

        public bool StartBookingTimeout(OrderBookingModel orderBooking) =>
            _orderBookings.TryAdd(orderBooking.OrderId, orderBooking.OrderTime);

        private void OnOrderTimeout(int orderId) => 
            OrderBookingTimeout?.Invoke(this, orderId);
        
        private void StartBookingTimeoutsWatcher()
        {
            IDisposable watcher = null;
            watcher = Observable
                .Timer(TimeSpan.Zero, TimeSpan.FromSeconds(TickIntervalSeconds))
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
         //   while (true)
          //  {
                DateTime nowTime = DateTime.Now;
                _orderBookings.ToList().ForEach(booking =>
                {
                    if (nowTime - booking.Value >= _orderBookingTimeoutMs)
                    {
                        var orderId = booking.Key;
                        var orderTime = booking.Value;
                        OnOrderTimeout(orderId);
                        _orderBookings.TryRemove(orderId, out orderTime);
                    }
                });
        //        Thread.Sleep(1000);
         //   }
            // ReSharper disable once FunctionNeverReturns
        }
        
        
        
    }
}