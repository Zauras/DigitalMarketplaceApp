using AsgardMarketplace.Controllers.ApiDto;
using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels;

namespace AsgardMarketplace.Services.DomainModels
{
    public class MarketplaceItemModel
    {
        public MarketplaceItemDto ToApiDto() =>
            new MarketplaceItemDto
            {
                Id = this.Id,
                Image = this.Image,
                Name = this.Name,
                Description = this.Description,
                Price = this.Price
            };

        public static MarketplaceItemModel ToDomainModel(MarketplaceItemDto dto) =>
            new MarketplaceItemModel(dto.Id, dto.Image, dto.Name, dto.Description, dto.Price);

        public static MarketplaceItemEntity ToEntity(MarketplaceItemModel model) =>
            new MarketplaceItemEntity
            {
                Id = model.Id,
                Image = model.Image,
                Name = model.Name,
                Description = model.Description,
                Price = model.Price
            };
        
        public static MarketplaceItemModel ToDomainModel(MarketplaceItemEntity entity) =>
            new MarketplaceItemModel(entity.Id, entity.Image, entity.Name, entity.Description, entity.Price);

        public MarketplaceItemModel(int id, string image, string name, string description, float price)
        {
            Id = id;
            Image = image;
            Name = name;
            Description = description;
            Price = price;
        }
        
        private int Id { get; }

        private string Image { get; }

        private string Name  { get; }

        private string Description { get; }
        
        private float Price { get; }
    }
}