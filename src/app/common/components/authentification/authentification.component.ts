import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-authentification',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './authentification.component.html',
  styleUrl: './authentification.component.scss'
})
export class AuthentificationComponent {

  // representation objet de mon formulaire
  protected authentificationForm = new FormGroup({
    email: new FormControl('', [ Validators.required, Validators.email ]),
    password: new FormControl('', [ Validators.required, Validators.minLength(8)]),
  })

  public submitAuthentificationForm(): void {
    console.log('Submit Authentification');
  }
}
