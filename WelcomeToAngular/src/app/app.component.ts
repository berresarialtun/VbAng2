import { Component } from '@angular/core';
import { TodoItem } from './models/todoItem.model';
import { TotoItemList } from './models/todoItems.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'WelcomeToAngular';
  intro: string = 'Bu, ilk Angular denemesi';
  isCompleted: boolean = true;

  todos: TodoItem[] = TotoItemList;

  showAll: boolean = true;

  fllter(): void {
    this.showAll = !this.showAll;

    if (this.showAll) {
      this.todos = TotoItemList;
    }
    else {
      this.todos = this.todos.filter(x => !x.isDone);
    }

    let x = this.addNewItem("hebe");
  
  }

  getFilterButtonText(): string {
    return this.showAll ? "Filtrele (yapılanları gizle)" : "Tümünü Göster"
  }
  addNewItem(action: string) {
    let item = new TodoItem(action, false);
    this.todos.push(item);

  }
}
