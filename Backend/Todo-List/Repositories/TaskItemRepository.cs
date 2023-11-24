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

        public List<TaskItem> GetAll()
        {
            var result = _dbContext.Tasks;

            return result.ToList();
        }

        public Task<TaskItem> GetById()
        {
            throw new NotImplementedException();
        }

        public Task<TaskItem> GetByOwner()
        {
            throw new NotImplementedException();
        }

        public Task Create(TaskItem item) { throw new NotImplementedException(); }

        public Task<TaskItem> Update(TaskItem item) { throw new NotImplementedException(); }

        public Task Delete(TaskItem item) { throw new NotImplementedException(); }
    }
}
