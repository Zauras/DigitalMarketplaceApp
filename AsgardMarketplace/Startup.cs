using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase;
using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.Facade;
using AsgardMarketplace.Services;
using AsgardMarketplace.Services.Facade;
using AsgardMarketplace.Swagger;
using Microsoft.OpenApi.Models;

namespace AsgardMarketplace
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        private IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
                { configuration.RootPath = "ReactApp/build"; });

            services.AddSwaggerGen(swaggerGenOptions =>
            {
                swaggerGenOptions.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "Asgard Store API",
                    Version = "v1"
                });
            });
            
            // Configure Dependency Injection
            services.AddSingleton<IMarketplaceService, MarketplaceService>();
            services.AddSingleton<IOrderService, OrderService>();
            services.AddSingleton<IOrderBookingTimeoutWatcherService, OrderBookingTimeoutWatcherService>();
            
            string asgardMarketplaceConnectionString = Configuration
                .GetConnectionString("AsgardMarketplaceDatabase");
            
            var asgardMarketplaceUnitOfWork = new UnitOfWork(asgardMarketplaceConnectionString);
            services.AddSingleton<IUnitOfWork>(x => asgardMarketplaceUnitOfWork);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            
            var swaggerOptions = new SwaggerOptions();
            Configuration.GetSection(nameof(SwaggerOptions)).Bind(swaggerOptions);

            app.UseSwagger(option => {option.RouteTemplate = swaggerOptions.JsonRoute; });
            app.UseSwaggerUI(option =>
            {
                option.SwaggerEndpoint(swaggerOptions.UiEndpoint, swaggerOptions.Description);
            });
            

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}"
                    );
            });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ReactApp";

                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });
        }
    }
}