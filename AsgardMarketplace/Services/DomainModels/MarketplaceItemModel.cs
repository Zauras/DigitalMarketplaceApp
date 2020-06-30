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
                OwnerId = this.OwnerId,
                Price = this.Price
            };

        public static MarketplaceItemModel ToDomainModel(MarketplaceItemDto dto) =>
            new MarketplaceItemModel(dto.Id, dto.Image, dto.Name, dto.Description, dto.OwnerId, dto.Price);

        public static MarketplaceItemEntity ToEntity(MarketplaceItemModel model) =>
            new MarketplaceItemEntity
            {
                Id = model.Id,
                Image = model.Image,
                Name = model.Name,
                Description = model.Description,
                OwnerId = model.OwnerId,
                Price = model.Price
            };
        
        public static MarketplaceItemModel ToDomainModel(MarketplaceItemEntity entity) =>
            new MarketplaceItemModel(entity.Id, entity.Image, entity.Name, entity.Description, entity.OwnerId, entity.Price);

        public MarketplaceItemModel(int id, string image, string name, string description, int ownerId, float price)
        {
            Id = id;
            Image = image;
            Name = name;
            Description = description;
            OwnerId = ownerId;
            Price = price;
        }
        
        public int Id { get; }

        public string Image { get; }

        public string Name  { get; }

        public string Description { get; }
        
        public int OwnerId { get; }
        
        public float Price { get; }
    }
}