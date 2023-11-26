using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Todo_List.Data;
using Todo_List.Models;
using Todo_List.Services;

namespace Todo_List.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoItemController : ControllerBase
    {
        private IToDoService _ToDoService;
        public TodoItemController(IToDoService toDoService)
        {
            _ToDoService = toDoService;
        }


        [HttpGet]
        public async Task<IActionResult> GetAllTasks()
        {
            var tasks = await _ToDoService.GetAllTaskItems();

            return Ok(tasks);
        }

        [HttpPost]
        [Route("create")]
        public async Task<IActionResult> CreateTask(TaskItem item)
        {
            try
            {
                await _ToDoService.CreateTaskItem(item);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("update")]
        public async Task<IActionResult> UpdateTask(TaskItem item)
        {
            try
            {
                var taskItem = await _ToDoService.UpdateTaskItem(item);

                return Ok(item);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        [Route("delete/{itemId}")]
        public async Task<IActionResult> DeleteTask(int itemId)
        {
            try
            {
                await _ToDoService.DeleteTaskItem(itemId);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}

