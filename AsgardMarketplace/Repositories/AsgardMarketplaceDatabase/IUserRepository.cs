using System.Collections.Generic;
using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels;

namespace AsgardMarketplace.Repositories.AsgardMarketplaceDatabase
{
    public interface IUserRepository
    {
        public IEnumerable<UserEntity> GetAllInIds(IEnumerable<int> userIds);
        
    }
}