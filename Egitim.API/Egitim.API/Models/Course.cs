using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Egitim.API.Models
{
    public class Course
    {
        /*
         * public id?:number, 
                public imageUrl?:string, 
                public name?:string, 
                public instructor?:string,
                public rating?:number,
                public categoryId?:number,
                public comments?:Comment[]
         */
        public int Id { get; set; }
        public string ImageUrl { get; set; }
        public string Name{ get; set; }
        public string Instructor { get; set; }
        public double? Rating { get; set; }
        public int CategoryId { get; set; }
        public Comment[] Comments { get; set; }
    }
}
