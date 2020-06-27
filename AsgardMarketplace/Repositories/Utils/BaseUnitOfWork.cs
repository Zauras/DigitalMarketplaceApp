using System;
using System.Data.SqlClient;

namespace AsgardMarketplace.Repositories.Utils
{
    public abstract class BaseUnitOfWork : IDisposable
    {
        protected readonly SqlConnection Connection;

        public BaseUnitOfWork(string connectionString) =>
            Connection = new SqlConnection(connectionString);
        
        public void Dispose()
        {
            // Dispose of unmanaged resources.
            Dispose(true);
            // Suppress finalization.
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (Connection != null)
            {
                Connection.Dispose();
            }
        }
    }
}