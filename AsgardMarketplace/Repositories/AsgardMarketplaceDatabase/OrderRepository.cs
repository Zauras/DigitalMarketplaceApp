using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

using AsgardMarketplace.Repositories.Utils;
using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DatabaseMock;
using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels;


namespace AsgardMarketplace.Repositories.AsgardMarketplaceDatabase
{

    public class OrderRepository : BaseRepository, IOrderRepository
    {
        public OrderRepository(SqlConnection connection) : base(connection) {}

        
        public IEnumerable<OrderEntity> GetSellerOrders(int sellerId) =>
            OrderTable.Entities.Where(order => order.SellerId == sellerId);
        
        public IEnumerable<OrderEntity> GetBuyerOrders(int buyerId) =>
            OrderTable.Entities.Where(order => order.BuyerId == buyerId);

    }
}