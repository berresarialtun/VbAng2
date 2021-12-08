import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../models/category.model';
import { Course } from '../models/course.model';
import { CategoryService } from '../services/category.service';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private courseService: CourseService,
    private categoryService: CategoryService) { }

  categories: Category[]
  course: Course;

  addCourseForm: FormGroup
  ngOnInit(): void {

    this.categoryService.getAllCategories()
      .subscribe((data: Category[]) => this.categories = data);

    this.addCourseForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        instructor: ['', Validators.required],
        categoryId: ['', Validators.required],
        imageUrl: [''],
        rating: ['']
      }
    );
  }

  addCourse() {
    if (this.addCourseForm.valid) {
      console.log(this.addCourseForm.value);
      this.course = this.addCourseForm.value;
      this.courseService.addCourse(this.course)
        .subscribe((x: Course) => alert(x.name + " kursu eklendi "));
    }
  }

  checkNameisEmpty(inputName: string, isUntouched: boolean) {

    let untouched = isUntouched ? this.addCourseForm.get(inputName)?.untouched :
      this.addCourseForm.get(inputName)?.dirty;

    let response = this.addCourseForm.get(inputName)?.hasError("required") && untouched


    return response;
  }


}
