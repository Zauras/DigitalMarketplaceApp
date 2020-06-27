using System.Collections.Generic;

using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels;


namespace AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.RepoDto
{
    public class UserOrdersRepoDto
    {
        public UserOrdersRepoDto(IEnumerable<OrderEntity> sellerOrders, IEnumerable<OrderEntity> buyerOrders)
        {
            SellerOrders = sellerOrders;
            BuyerOrders = buyerOrders;
        }
            
        public IEnumerable<OrderEntity> SellerOrders { get; }

        public IEnumerable<OrderEntity> BuyerOrders { get; }
    }
}