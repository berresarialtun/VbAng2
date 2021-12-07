using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Egitim.API.Models
{
    public class Comment
    {
        /*
         * public id?:number, public comment?: string, public courseId?:number
         */

        public int Id { get; set; }
        public string comment { get; set; }
        public int CourseId { get; set; }
    }
}
