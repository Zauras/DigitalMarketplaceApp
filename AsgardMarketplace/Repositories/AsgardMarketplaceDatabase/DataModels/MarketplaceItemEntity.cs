namespace AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels
{
    public class MarketplaceItemEntity
    {
        public int Id { get; set;  }

        public string Image { get; set; }

        public string Name  { get; set; }

        public string Description { get; set; }
        
        public int OwnerId { get; set; }
        
        public float Price { get; set; }
    }
}