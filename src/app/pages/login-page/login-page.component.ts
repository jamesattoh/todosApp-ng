import { Component } from '@angular/core';
import {AuthentificationComponent} from '../../common/components/authentification/authentification.component';

@Component({
  selector: 'app-login-page',
  imports: [
    AuthentificationComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}
