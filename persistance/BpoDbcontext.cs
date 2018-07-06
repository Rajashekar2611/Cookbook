
using Microsoft.EntityFrameworkCore;
using Copy.ClientApp.app.Models;
using Microsoft.EntityFrameworkCore.Design;
using System.IO;
using Microsoft.Extensions.Configuration;

namespace BPO.persistance
{
    public class BpoDbcontext: DbContext
    {
        
 public DbSet<receipe> receipe { get; set; }
public BpoDbcontext(DbContextOptions<BpoDbcontext> options):base(options)
{
}

}

public class BpoDbcontextFactory : IDesignTimeDbContextFactory<BpoDbcontext>
{
    public BpoDbcontext CreateDbContext(string[] args)
    {
        IConfigurationRoot configuration = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json")
            .Build();
 
        var builder = new DbContextOptionsBuilder<BpoDbcontext>();
 
        var connectionString = configuration.GetConnectionString("Default");
 
        builder.UseSqlServer(connectionString);
 
        return new BpoDbcontext(builder.Options);
    }
}

}