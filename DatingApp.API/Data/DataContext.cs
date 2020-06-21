using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
  public class DataContext : DbContext
  {
    public DataContext(DbContextOptions<DataContext> options) : base(options) { }

    // Represents the table name in database
    public DbSet<Value> Values { get; set; }

    public DbSet<User> Users { get; set; }

  }
}