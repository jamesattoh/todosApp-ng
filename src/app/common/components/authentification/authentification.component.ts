import {Component, input, output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

export type authentificationFormValuesType = {
  email: string,
  password: string,
}

@Component({
  selector: 'app-authentification',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './authentification.component.html',
  styleUrl: './authentification.component.scss'
})
export class AuthentificationComponent {
  // rendons dynamique le titre du formulaire
  readonly formTitle = input.required<'Connexion' | 'Inscription'>();

  readonly authentificationFormValues = output<authentificationFormValuesType>();

  protected passwordType: 'password' | 'text' = 'password';

  // representation objet de mon formulaire
  protected authentificationForm = new FormGroup({
    email: new FormControl('', [ Validators.required, Validators.email ]),
    password: new FormControl('', [ Validators.required, Validators.minLength(8)]),
  })

  public togglePasswordVisibility(): void {
    if (this.passwordType === 'password') { this.passwordType = 'text'; } else { this.passwordType = 'password'; }
  }

  public submitAuthentificationForm(): void {
    this.authentificationFormValues.emit(this.authentificationForm.value as authentificationFormValuesType);
  }
}
