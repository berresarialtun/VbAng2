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
  paginatedCourse:Course[];

  productsPerPage = 1;
  selectedPage =1 ;


  pagination(){
    let pageNo = (this.selectedPage -1)*this.productsPerPage;
    this.paginatedCourse = this.courseList.slice(pageNo, (pageNo + this.productsPerPage)); 
    //1. sayfa: 0  3
    //2. sayfa: 3  6
    //3. sayfa: 6  9 
  }

  changePage(newPage:number){
    this.selectedPage = newPage;
    console.log(this.selectedPage);
    this.pagination();
  }
  changePageSize(newSize:number){
    this.productsPerPage = newSize;
    this.changePage(1);
  }

  pageNumbers():number[]{
    return Array(Math.ceil(this.courseList.length/ this.productsPerPage)).fill(0).map((x,i)=>i+1);
  }


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
