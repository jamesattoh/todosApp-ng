import { Component } from '@angular/core';
import {
  AuthentificationComponent,
  authentificationFormValuesType
} from '../../common/components/authentification/authentification.component';

@Component({
  selector: 'app-register-page',
  imports: [
    AuthentificationComponent
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {
  public onRegister(authentificationFormValues : authentificationFormValuesType): void {
    console.log(authentificationFormValues);
  }
}
