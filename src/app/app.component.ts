import { Component } from '@angular/core';
import { TodoItem } from './models/todo-item.model';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private todoService: TodoService) {}

  addTodo(todo: TodoItem) {
    this.todoService.saveTodo(todo);
  }
}
