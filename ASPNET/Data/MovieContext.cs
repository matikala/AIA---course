using Microsoft.EntityFrameworkCore;

namespace ASPNET.Data
{
    public class MovieContext : DbContext
    {
        public MovieContext (
            DbContextOptions<MovieContext> options)
            : base(options)
        {
        }

        public DbSet<ASPNET.Models.Movie> Movie { get; set; }
    }
}