using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using AsgardMarketplace.Controllers.Dto;

namespace AsgardMarketplace.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MarketplaceController : ControllerBase
    {

        private readonly ILogger<MarketplaceController> _logger;

        public MarketplaceController(ILogger<MarketplaceController> logger)
        {
            _logger = logger;
        }

        private static readonly MarketplaceItemDto[] fakeItemList = new[]
        {
            new MarketplaceItemDto
            {
                Id = 1,
                Image = "",
                Name = "Thor's Hammer - Mjölnir",
                Description = "Buy and give some hammering",
                Price = 18.5f
            },
            new MarketplaceItemDto
            {
                Id = 2,
                Image = "",
                Name = "Loki's The Green Mask",
                Description = "Be Da Great Green Prophet",
                Price = 18.5f
            },
            new MarketplaceItemDto
            {
                Id = 3,
                Image = "",
                Name = "Freya's sword",
                Description = "Slash with ice and love",
                Price = 18.5f
            }
        };
        
        [HttpGet]
        public IEnumerable<MarketplaceItemDto> Get()
        {

            return fakeItemList;

            // return 
        }
    }
}