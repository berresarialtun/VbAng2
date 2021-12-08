import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../models/course.model';
import { CourseList } from '../models/mocks/course.mock';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(private courseService:CourseService, private activeRoute:ActivatedRoute) { }

  searchWord:string;

  courseList: Course[];

  ngOnInit(): void {
    this.activeRoute.params.subscribe(par => {
      let id = par["id"];
       console.log(id);
       id != undefined ?
             this.courseService.getCoursesByCategoryId(id)
                               .subscribe((data:Course[])=> this.courseList = data )
          :
             this.courseService.getCourses()
                               .subscribe((data:Course[])=>this.courseList=data);
    });


    this.courseService.getCourses()
        .subscribe((gelenData:Course[])=>this.courseList=gelenData);
  }

}
