using Egitim.API.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Egitim.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private CategoryService categoryService;

        public CategoriesController(CategoryService categoryService )
        {
            this.categoryService = categoryService;
        }
        [HttpGet]
        public IActionResult GetCategories() {
            return Ok(categoryService.GetCategories());
        }
    }
}
