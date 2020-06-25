import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

interface ITodo {
  id: number;
  content: string;
  complete: boolean;
}

@Component({
  selector: 'app-thuchanh-ungdung-todo',
  templateUrl: './thuchanh-ungdung-todo.component.html',
  styleUrls: ['./thuchanh-ungdung-todo.component.css']
})
export class ThuchanhUngdungTodoComponent implements OnInit {
  private id = 1;
  userInput = new FormControl();
  todos: Array<ITodo> = [];
  constructor() { }

  ngOnInit(): void {
  }
  onChange() {
    const {value} = this.userInput;
    if (value) {
      const todo: ITodo = {
        id: this.id++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.userInput.setValue('');
    }
  }

  toggleTodo(i) {
    this.todos[i].complete = !this.todos[i].complete;
  }
}
