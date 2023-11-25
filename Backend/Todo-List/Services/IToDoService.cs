using Todo_List.Models;

namespace Todo_List.Services
{
    public interface IToDoService
    {
        Task<List<TaskItem>> GetAllTaskItems();
        Task CreateTaskItem(TaskItem item);
        Task<TaskItem> UpdateTaskItem(TaskItem item);
        Task DeleteTaskItem(int taskItemId);



    }
}