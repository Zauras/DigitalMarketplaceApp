using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DatabaseMock;
using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels;
using AsgardMarketplace.Repositories.Utils;

namespace AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.RepoDto
{
    public class UserRepository : BaseRepository, IUserRepository
    {
        public UserRepository(SqlConnection connection) : base(connection) {}
        
        public IEnumerable<UserEntity> GetAllInIds(IEnumerable<int> userIds) =>
            UserTable.Entities
                .Where(user => userIds.Contains(user.Id));
        
    }
}