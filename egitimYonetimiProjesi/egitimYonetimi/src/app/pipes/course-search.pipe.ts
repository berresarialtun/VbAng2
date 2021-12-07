import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course.model';

@Pipe({
  name: 'courseSearch'
})
export class CourseSearchPipe implements PipeTransform {

  transform(value: Course[], searchKey:string): Course[] {
    return searchKey !== undefined ?
           value.filter(c=>c.name?.toLowerCase().includes(searchKey.toLocaleLowerCase()))
           :
           value;
  }

}
