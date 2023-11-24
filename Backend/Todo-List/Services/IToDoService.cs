using Todo_List.Models;

namespace Todo_List.Services
{
    public interface IToDoService
    {
        List<TaskItem> GetAllTaskItems();
    }
}