namespace AsgardMarketplace.Controllers.Dto
{
    public class MarketplaceItemDto
    {
        // MarketplaceItemDto(int id, string image, string name, string description, float price)
        // {
        //     this.Id = id;
        //     this.Image = image;
        //     this.Name = name;
        //     this.Description = description;
        //     this.Price = price;
        // }
        
        public int Id { get; set;  }

        public string Image { get; set; }

        public string Name  { get; set; }

        public string Description { get; set; }
        
        public float Price { get; set; }
    }
}