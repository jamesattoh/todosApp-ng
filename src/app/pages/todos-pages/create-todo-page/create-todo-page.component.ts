import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-todo-page',
  imports: [
    FormsModule
  ],
  templateUrl: './create-todo-page.component.html',
  styleUrl: './create-todo-page.component.scss'
})
export class CreateTodoPageComponent {
    protected todoTitle = '';
    protected todoDescription = '';
    protected todoTitleError = '';


    public onSaveTask(): void {

      if (this.todoTitle.length === 0) {
        this.todoTitleError = 'Title is required';
        return;
      } else {
        this.todoTitleError = '';
      }

      console.log("todoTitle : ",this.todoTitle);
      console.log("todoDescription",this.todoDescription);
    }
}
