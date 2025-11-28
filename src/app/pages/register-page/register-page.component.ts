import { Component } from '@angular/core';
import {AuthentificationComponent} from '../../common/components/authentification/authentification.component';

@Component({
  selector: 'app-register-page',
  imports: [
    AuthentificationComponent
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {

}
