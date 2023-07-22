import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todo-item.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoList: TodoItem[] = [];

  constructor() {}

  saveTodo(todo: TodoItem) {
    this.todoList.push(todo);
    console.log(this.todoList);
  }
}
