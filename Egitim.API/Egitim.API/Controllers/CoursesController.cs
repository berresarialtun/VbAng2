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
    public class CoursesController : ControllerBase
    {
        private CourseService courseService;
        public CoursesController(CourseService courseService)
        {
            this.courseService = courseService;
        }
        [HttpGet]
        public IActionResult GetCourses()
        {
            return Ok(courseService.GetCourses());
        }
        [HttpGet("category/{id}")]
        public IActionResult GetCoursesByCategegoryId(int id)
        {
            var courses = courseService.GetCourses().Where(x => x.CategoryId == id);
            return Ok(courses);
        }
    }
}
