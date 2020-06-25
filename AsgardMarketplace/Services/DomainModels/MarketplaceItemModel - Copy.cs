using AsgardMarketplace.Controllers.Dto;
using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels;

namespace AsgardMarketplace.Services.DomainModels
{
    public class MarketplaceItemModel
    {
        public static MarketplaceItemDto ToDto(MarketplaceItemModel model) =>
            new MarketplaceItemDto
            {
                Id = model.Id,
                Image = model.Image,
                Name = model.Name,
                Description = model.Description,
                Price = model.Price
            };

        public static MarketplaceItemModel ToModel(MarketplaceItemDto dto) =>
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
        
        public static MarketplaceItemModel ToModel(MarketplaceItemEntity model) =>
            new MarketplaceItemModel(model.Id, model.Image, model.Name, model.Description, model.Price);

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