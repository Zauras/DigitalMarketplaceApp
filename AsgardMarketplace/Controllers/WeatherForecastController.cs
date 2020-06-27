using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using AsgardMarketplace.Controllers.ApiDto;

namespace AsgardMarketplace.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };
        
        private static readonly MarketplaceItemDto[] fakeItemList =
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

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<MarketplaceItemDto> Get()
        {
            var rng = new Random();
            var x = Enumerable.Range(1, 5).Select(index => new WeatherForecast
                {
                    Date = DateTime.Now.AddDays(index),
                    TemperatureC = rng.Next(-20, 55),
                    Summary = Summaries[rng.Next(Summaries.Length)]
                })
                .ToArray();
            
            return fakeItemList;

            // return 
        }
    }
}