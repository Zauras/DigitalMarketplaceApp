using AsgardMarketplace.Controllers.ApiDto;
using AsgardMarketplace.Repositories.AsgardMarketplaceDatabase.DataModels;

namespace AsgardMarketplace.Services.DomainModels
{
    public class UserModel
    {
        public UserModel(int id, string name)
        {
            Id = id;
            Name = name;
        }

        public static UserModel ToDomainModel(UserEntity entity) =>
            new UserModel(entity.Id, entity.Name);


        public UserDto ToApiDto() =>
            new UserDto
            {
                Id = this.Id,
                Name = this.Name
            };
        
        
        public int Id { get; set; }
        public string Name { get; set; }

    }
}