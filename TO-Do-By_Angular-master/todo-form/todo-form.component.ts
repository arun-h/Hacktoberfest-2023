import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  newItem: string = '';
  todoList: string[] = [];

  addItem() {
    if (this.newItem.trim() !== '') {
      this.todoList.push(this.newItem);
      this.newItem = '';
    }
  }

  removeItem(index: number) {
    this.todoList.splice(index, 1);
  }
}
