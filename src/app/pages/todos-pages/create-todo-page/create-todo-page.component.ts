import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-todo-page',
  imports: [
    FormsModule,
    ReactiveFormsModule, // premiere etape : importer le module
  ],
  templateUrl: './create-todo-page.component.html',
  styleUrl: './create-todo-page.component.scss'
})
export class CreateTodoPageComponent {

  // 3e etape : la representation objet de mon formulaire
  protected todoForm = new FormGroup({
    todoTitle: new FormControl('', [Validators.required, Validators.minLength(5)]),
    todoDescription: new FormControl('', [Validators.required]),
  })

  public onSaveTask(): void {
    console.log(this.todoForm.value);
  }
}
