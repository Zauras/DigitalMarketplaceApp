using System.Data.SqlClient;

namespace AsgardMarketplace.Repositories.Utils
{
    public abstract class BaseRepository
    {
        protected readonly SqlConnection connection;

        public BaseRepository(SqlConnection connection)
        {
           this.connection = connection;
        }        
    }
}