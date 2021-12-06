import { Component } from '@angular/core';
import { TodoItem } from './models/todoItem.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'WelcomeToAngular';
  intro : string = 'Bu, ilk Angular denemesi';
  isCompleted: boolean = true; 

  todos: TodoItem[]=[
    
    new TodoItem('Angular Öğren',false),
    new TodoItem( 'React Öğren', true ),
    new TodoItem ('Vue Öğren', false )
  ];
}
