import { Component } from '@angular/core';
import { AuthentificationComponent } from '../../common/components/authentification/authentification.component';
import {authentificationFormValuesType} from '../../common/components/authentification/types/authentification.type';

@Component({
  selector: 'app-login-page',
  imports: [
    AuthentificationComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
    public onLogin(authentificationFormValues: authentificationFormValuesType): void {
      console.log(authentificationFormValues)
    }
}
