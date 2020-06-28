using System;
using System.Collections.Generic;

using AsgardMarketplace.Services.DomainModels;
using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.Facade;
using AsgardMarketplace.Services.Facade;


namespace AsgardMarketplace.Services
{
    public class OrderService : IOrderService
    {
        private readonly IUnitOfWork _asgardMarketplaceUnitOfWork;
        private readonly IOrderBookingTimeoutWatcherService _bookingTimeoutService;

        public OrderService(
            IUnitOfWork asgardMarketplaceUnitOfWork,
            IOrderBookingTimeoutWatcherService bookingTimeoutService
            )
        {
            _asgardMarketplaceUnitOfWork = asgardMarketplaceUnitOfWork;
            _bookingTimeoutService = bookingTimeoutService;
        }
        

        public IEnumerable<OrderModel> GetUserSellingOrders(int userId) =>
            _asgardMarketplaceUnitOfWork.GetUserSellingOrders(userId);
        
        public IEnumerable<OrderModel> GetUserBuyingOrders(int userId) =>
            _asgardMarketplaceUnitOfWork.GetUserBuyingOrders(userId);
        
        public int? CreateOrder(int itemId, int buyerId)
        {
            try
            {
                var orderBooking =  _asgardMarketplaceUnitOfWork.CreateOrder(itemId, buyerId);
                _bookingTimeoutService.StartBookingTimeout(orderBooking);
                return orderBooking.OrderId;
            }
            catch (Exception)
            {
                // In real project would catch SQL, NullPointer or Threading Exceptions 
                // retry or in case of data corruption - rollback
                return null;
            }
        }
        
        // In real world would redirect user page to Third party payment services
        public bool ReceivePayment(int orderId) =>
            _asgardMarketplaceUnitOfWork
                .OrderRepository.SetOrderStatusCanceled(orderId);
        

        public void CancelOrder(int orderId) => _asgardMarketplaceUnitOfWork
            .OrderRepository.SetOrderStatusCanceled(orderId);
        


        
    }
}

