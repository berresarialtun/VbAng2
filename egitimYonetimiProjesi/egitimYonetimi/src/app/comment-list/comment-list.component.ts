import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  constructor() { }

  @Input() course: Course

  ngOnInit(): void {
  }

}
