
using Microsoft.EntityFrameworkCore;
using Todo_List.Models;
using TaskItem = Todo_List.Models.TaskItem;

namespace Todo_List.Data
{
    public class TodoContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlite("name=ConnectionStrings:localDb");
        }

        public DbSet<TaskItem> Tasks { get; set; }

    }
}
