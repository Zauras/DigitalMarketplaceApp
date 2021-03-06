﻿using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using AsgardMarketplace.Controllers.ApiDto;
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
            _marketplaceService.GetMarketplaceItems().Select(i => i.ToApiDto())
                .ToArray();
        
        [HttpGet("items/owner/{userId}")]
        public ActionResult<IEnumerable<MarketplaceItemDto>> GetUserItems(int userId) => 
            _marketplaceService.GetUserItemsOnMarket(userId)
                .Select(i => i.ToApiDto())
                .ToArray();
        
    }
}