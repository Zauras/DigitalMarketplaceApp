using System.Collections.Generic;
using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels;

namespace AsgardMarketplace.Repositories.AsgardMarketplaceDatabase
{
    public interface IOrderStatusRepository
    {
        public OrderStatusEntity GetStatusById(int statusId);
    }
}