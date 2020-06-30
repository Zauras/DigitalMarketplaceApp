using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DatabaseMock;
using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels;
using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.Facade;
using AsgardMarketplace.Repositories.Utils;

namespace AsgardMarketplace.Repositories.AsgardMarketplaceDatabase
{
    public class OrderStatusRepository : BaseRepository, IOrderStatusRepository
    {
        public OrderStatusRepository(SqlConnection connection) : base(connection) {}

        public OrderStatusEntity GetStatusById(int statusId) =>
            StatusTable.Entities.First(status => (int) status.Id == statusId);
        
    }
}