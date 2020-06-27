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

        
        public IEnumerable<OrderEntity> GetSellingOrders(int userId) =>
            OrderTable.Entities.Where(order => order.SellerId == userId);
        
        public IEnumerable<OrderEntity> GetBuyingOrders(int userId) =>
            OrderTable.Entities.Where(order => order.BuyerId == userId);

        public IEnumerable<OrderEntity> GetAllByUserId(int userId) =>
            OrderTable.Entities.Where(order => order.BuyerId == userId || order.SellerId == userId);

    }
}