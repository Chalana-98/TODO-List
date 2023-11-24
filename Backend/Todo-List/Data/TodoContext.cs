
using Microsoft.EntityFrameworkCore;
using Todo_List.Models;
using TaskItem = Todo_List.Models.TaskItem;

namespace Todo_List.Data
{
    public class TodoContext : DbContext
    {

        protected readonly IConfiguration Configuration;

        //public TodoContext(IConfiguration configuration)
        //{
        //    Configuration = configuration;
        //}

        public TodoContext(DbContextOptions<TodoContext> options)
        : base(options)
        {
        }

        //protected override void OnConfiguring(DbContextOptionsBuilder options)
        //{
        //    // connect to sqlite database
        //    options.UseSqlite(Configuration.GetConnectionString("localDb"));
        //}


        public DbSet<TaskItem> Tasks { get; set; }

    }
}
