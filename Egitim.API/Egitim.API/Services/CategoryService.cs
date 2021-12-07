using Egitim.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Egitim.API.Services
{
    public class CategoryService
    {
        private List<Category> categories;
        public CategoryService()
        {
            categories = new List<Category>
            {
                new Category { Id=1, Name="Yazılım Eğitimi"},
                new Category { Id=2, Name="PMP Eğitimi"},
                new Category { Id=3, Name="ITIL Eğitimi"},
                new Category { Id=4, Name="Devops Engineering Eğitimi"},
            };
        }

        public List<Category> GetCategories()
        {
            return categories;
        }
    }


}
