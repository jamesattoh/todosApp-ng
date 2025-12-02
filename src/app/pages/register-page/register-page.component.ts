import {Component, inject} from '@angular/core';
import { AuthentificationComponent } from '../../common/components/authentification/authentification.component';
import {authentificationFormValuesType} from '../../common/components/authentification/types/authentification.type';
import {AuthentificationHttpService} from '../../common/services/authentification-http/authentification-http.service';

@Component({
  selector: 'app-register-page',
  imports: [
    AuthentificationComponent
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {

  private readonly authentificationHttpService = inject(AuthentificationHttpService);

  public onRegister(authentificationFormValues : authentificationFormValuesType): void {
    console.log(authentificationFormValues);
    this.authentificationHttpService.register(authentificationFormValues).subscribe({
      next: (response) => console.log('User registered successfully',response),
    });
  }
}
