import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { CourseListComponent } from './course-list/course-list.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  {path:'', component:CourseListComponent},
  {path:'courses', component:CourseListComponent},
  {path:'categories', component:CategoryMenuComponent},
  {path:'courses/category/:id',component:CourseListComponent},
  {path:'courses/addNewCourse',component:AddCourseComponent,canActivate:[LoginGuard] },
  {path:'categories/addNewCategory',component:AddCategoryComponent, canActivate:[LoginGuard]},
  {path:'login', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
