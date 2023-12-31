import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { CockpitComponent } from './components/cockpit/cockpit.component';
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [AppComponent, TodoItemComponent, CockpitComponent],
  imports: [BrowserModule],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
