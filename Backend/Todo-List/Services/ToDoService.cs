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

        public async Task CreateTaskItem(TaskItem item)
        {
            await _TaskItemRepository.Create(item);
        }

        public Task<TaskItem> UpdateTaskItem(TaskItem item)
        {
            return _TaskItemRepository.Update(item);
        }

        public async Task DeleteTaskItem(int taskItemId)
        {
            await _TaskItemRepository.Delete(taskItemId);
        }
    }
}
