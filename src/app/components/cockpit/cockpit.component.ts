import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { TodoItem } from 'src/app/models/todo-item.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
  @ViewChild('todoTextInput', { static: true }) todoTextInput: ElementRef;
  @Output() onAddTodo = new EventEmitter<TodoItem>();

  constructor() {}

  handleAddTodo() {
    this.onAddTodo.emit({
      task: this.todoTextInput.nativeElement.value,
      status: false,
    });
  }
}
