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
    public class MarketplaceController : ControllerBase
    {

        private readonly ILogger<MarketplaceController> _logger;

        private readonly IMarketplaceService _marketplaceService;

        public MarketplaceController(ILogger<MarketplaceController> logger, IMarketplaceService marketplaceService)
        {
            _logger = logger;
            _marketplaceService = marketplaceService;
        }
        

        [HttpGet("items")]
        public ActionResult<IEnumerable<MarketplaceItemDto>> GetItems() => 
            _marketplaceService.GetMarketplaceItems().Select(MarketplaceItemModel.ToDto).ToArray();
        
    }
}