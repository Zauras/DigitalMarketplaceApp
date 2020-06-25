using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels;

namespace AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DatabaseMock
{
    public class UserTable
    {
        public static readonly UserEntity[] Entities = 
        {
            new UserEntity
            {
                Id = 1,
                Name = "user-1"
            },
            new UserEntity
            {
                Id = 2,
                Name = "user-2"
            },
            new UserEntity
            {
                Id = 3,
                Name = "user-3"
            },
            new UserEntity
            {
                Id = 4,
                Name = "user-4"
            },
            new UserEntity
            {
                Id = 5,
                Name = "user-5"
            }
        };
    }
}