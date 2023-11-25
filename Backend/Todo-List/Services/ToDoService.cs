using Todo_List.Models;
using Todo_List.Repositories;

namespace Todo_List.Services
{
    public class ToDoService : IToDoService
    {
        private ITaskItemRepository _TaskItemRepository { get; set; }

        public ToDoService(ITaskItemRepository taskItemRepository)
        {
            _TaskItemRepository = taskItemRepository;
        }

        public Task<List<TaskItem>> GetAllTaskItems()
        {
            return _TaskItemRepository.GetAll();
        }

        public Task<TaskItem> UpdateTaskItem(TaskItem item)
        {
            throw new NotImplementedException();
        }

        public async Task CreateTaskItem(TaskItem item)
        {
            await _TaskItemRepository.Create(item);
        }

        public Task DeleteTaskItem(int taskItemId)
        {
            throw new NotImplementedException();
        }
    }
}
