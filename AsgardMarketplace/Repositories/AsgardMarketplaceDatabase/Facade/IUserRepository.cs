using System.Collections.Generic;
using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels;

namespace AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.Facade
{
    public interface IUserRepository
    {
        public IEnumerable<UserEntity> GetAllInIds(IEnumerable<int> userIds);
        
    }
}