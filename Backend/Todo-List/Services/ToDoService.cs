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

        public List<TaskItem> GetAllTaskItems()
        {
            return _TaskItemRepository.GetAll();
        }

        /* getAll ()
         * filter by user
         * order by priority
         */


        /* update(ToDo item) // arg : new item
         * update title, description, status, priority
         */

        /* delete(ToDo item) // arg : item to de deleted 
         * check the created user if yes -> delete else -> not authoried
         */

        /* create(ToDo item) // arg : item to be created 
         * 
         */
    }
}
