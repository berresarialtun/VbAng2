using Egitim.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Egitim.API.Services
{
    public class CourseService
    {

        public List<Course> GetCourses()
        {
            return courses;
        }
        private List<Course> courses;
        public CourseService()
        {
            courses = new List<Course>
            {
                new Course
                {
                    Id = 1,
                    CategoryId = 1, 
                    ImageUrl = "https://via.placeholder.com/150", 
                    Instructor = "Ahmet Mengiç",
                    Name = "React JS", 
                    Rating = 4.6, 
                    Comments = new Comment[] {
                        new Comment { Id = 1, comment = "Ok" },
                        new Comment { Id = 2, comment = "Success" }
                    }

                },
                 new Course
                {
                    Id = 2,
                    CategoryId = 1,
                    ImageUrl = "https://via.placeholder.com/150",
                    Instructor = "Türkay Ürkmez",
                    Name = "Angular 12",
                    Rating = 4.6,
                    Comments = new Comment[] {
                        new Comment { Id = 1, comment = "Ok" },
                        new Comment { Id = 2, comment = "Success" }
                    }

                },
                  new Course
                {
                    Id = 3,
                    CategoryId = 2,
                    ImageUrl = "https://via.placeholder.com/150",
                    Instructor = "Emrah Gençalp",
                    Name = "PMP Giriş",
                    Rating = 4.6,
                    Comments = new Comment[] {
                        new Comment { Id = 1, comment = "Ok" },
                        new Comment { Id = 2, comment = "Success" }
                    }

                },
                   new Course
                {
                    Id = 4,
                    CategoryId = 3,
                    ImageUrl = "https://via.placeholder.com/150",
                    Instructor = "Derya Yıldız",
                    Name = "ITIL Documentation",
                    Rating = 4.6,
                    Comments = new Comment[] {
                        new Comment { Id = 1, comment = "Ok" },
                        new Comment { Id = 2, comment = "Success" }
                    }

                },
                      new Course
                {
                    Id = 5,
                    CategoryId = 4,
                    ImageUrl = "https://via.placeholder.com/150",
                    Instructor = "Aslı Özgentürk",
                    Name = "Kubernetes Configuration",
                    Rating = 4.6,
                    Comments = new Comment[] {
                        new Comment { Id = 1, comment = "Ok" },
                        new Comment { Id = 2, comment = "Success" }
                    }

                }

            };
        }
    }
}
