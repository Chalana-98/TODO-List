using Todo_List.Models;

namespace Todo_List.Repositories
{
    public interface ITaskItemRepository
    {
        Task Create(TaskItem item);
        Task Delete(TaskItem item);
        List<TaskItem> GetAll();
        Task<TaskItem> GetById();
        Task<TaskItem> GetByOwner();
        Task<TaskItem> Update(TaskItem item);
    }
}