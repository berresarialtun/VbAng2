import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { CourseList } from '../models/mocks/course.mock';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(private courseService:CourseService) { }

  searchWord:string;

  courseList: Course[]=CourseList;

  ngOnInit(): void {
    this.courseService.getCourses()
        .subscribe((gelenData:Course[])=>this.courseList=gelenData);
  }

}
