using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using AsgardMarketplace.Controllers.Dto;
using AsgardMarketplace.Services.DomainModels;
using AsgardMarketplace.Services.Facade;

namespace AsgardMarketplace.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class OrderController : ControllerBase
    {

        private readonly ILogger<OrderController> _logger;

        private readonly IMarketplaceService _orderService;

        public OrderController(ILogger<OrderController> logger, IMarketplaceService orderService)
        {
            _logger = logger;
            _orderService = orderService;
        }
        

        [HttpGet("{userId}")]
        public ActionResult<IEnumerable<Order>> GetItems(int userId) => 
            _orderService.GetUserOrders(userId).Select(MarketplaceItemModel.ToDto).ToArray();
        
    }
}