using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Todo_List.Data;

namespace Todo_List.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodosController : ControllerBase
    {
        private readonly TodoContext todoContext;

        public TodosController(TodoContext todoContext)
        {
            this.todoContext = todoContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllTasks()
        {
            var Tasks = await todoContext.Tasks.ToListAsync();
            return Ok(Tasks);
        }
    }
}

