using AsgardMarketplace.Controllers.ApiDto;
using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels;

namespace AsgardMarketplace.Services.DomainModels
{
    public class OrderStatusModel
    {
        public int Id { get; }
        public string Type { get; }

        public OrderStatusModel(int id, string type)
        {
            Id = id;
            Type = type;
        }
            
        public static OrderStatusModel ToDomainModel(OrderStatusEntity entity) =>
            new OrderStatusModel((int) entity.Id, entity.Type);

        public OrderStatusDto ToApiDto() =>
            new OrderStatusDto
            {
                Id = this.Id,
                Type = this.Type
            };

    }

}