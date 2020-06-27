﻿using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using AsgardMarketplace.Controllers.ApiDto;
using AsgardMarketplace.Services.DomainModels;
using AsgardMarketplace.Services.Facade;

namespace AsgardMarketplace.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class OrderController : ControllerBase
    {

        private readonly ILogger<OrderController> _logger;

        private readonly IOrderService _orderService;

        public OrderController(ILogger<OrderController> logger, IOrderService orderService)
        {
            _logger = logger;
            _orderService = orderService;
        }
        
        [HttpGet("selling/{userId}")]
        public ActionResult<IEnumerable<OrderDto>> GetUserSellingOrders(int userId) =>
            _orderService.GetUserSellingOrders(userId).Select(OrderModel.ToApiDto).ToArray();


        [HttpGet("buying/{userId}")]
        public ActionResult<IEnumerable<OrderDto>> GetUserBuyingOrders(int userId) =>
            _orderService.GetUserBuyingOrders(userId).Select(OrderModel.ToApiDto).ToArray();

    }
}