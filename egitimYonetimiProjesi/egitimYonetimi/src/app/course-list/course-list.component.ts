import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course.model';
import { CourseList } from '../models/mocks/course.mock';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor() { }

  searchWord:string;

  courseList: Course[]=CourseList;

  ngOnInit(): void {
  }

}
