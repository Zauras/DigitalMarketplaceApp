using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels;

namespace AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.Facade
{
    public interface IOrderStatusRepository
    {
        public OrderStatusEntity GetStatusById(int statusId);
    }
}