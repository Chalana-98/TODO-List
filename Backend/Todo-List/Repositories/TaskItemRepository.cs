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



        public async Task<TaskItem> Update(TaskItem item)
        {
            var taskItem = await _dbContext.Tasks.FindAsync(item.Id);

            if (taskItem == null)
            {
                throw new Exception("task not found");
            }

            taskItem.Title = item.Title;
            taskItem.Description = item.Description;
            taskItem.IsCompleted = item.IsCompleted;
            taskItem.Priority = item.Priority;

            _dbContext.SaveChanges();

            return taskItem;
        }

        public async Task Delete(int taskItemId)
        {
            var result = await _dbContext.Tasks.FindAsync(taskItemId);

            if (result == null)
            {
                throw new Exception("task not found");
            }
            _dbContext.Tasks.Remove(result);

            await _dbContext.SaveChangesAsync();
        }
    }
}
