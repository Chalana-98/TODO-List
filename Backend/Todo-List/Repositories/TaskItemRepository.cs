using Microsoft.EntityFrameworkCore;
using System.Linq;
using Todo_List.Data;
using Todo_List.Models;

namespace Todo_List.Repositories
{
    public class TaskItemRepository : ITaskItemRepository
    {
        private TodoContext _dbContext;

        public TaskItemRepository(TodoContext dbContext)
        {
            _dbContext = dbContext;
        }

        public Task<List<TaskItem>> GetAll()
        {
            var result = _dbContext.Tasks.ToListAsync();

            return result;
        }


        public Task<TaskItem> GetById()
        {
            throw new NotImplementedException();
        }

        public Task<TaskItem> GetByOwner()
        {
            throw new NotImplementedException();
        }

        public async Task Create(TaskItem item)
        {
            await _dbContext.Tasks.AddAsync(item);
            await _dbContext.SaveChangesAsync();
        }



        public Task<TaskItem> Update(TaskItem item) { throw new NotImplementedException(); }

        public Task Delete(TaskItem item) { throw new NotImplementedException(); }
    }
}
