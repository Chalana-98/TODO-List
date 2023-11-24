using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Todo_List.Data;
using Todo_List.Services;

namespace Todo_List.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodosController : ControllerBase
    {
        private IToDoService _ToDoService;
        public TodosController(IToDoService toDoService)
        {
            _ToDoService = toDoService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllTasks()
        {
            var tasks = _ToDoService.GetAllTaskItems();

            return Ok(tasks);
        }
    }
}

