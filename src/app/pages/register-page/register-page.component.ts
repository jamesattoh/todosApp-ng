import {Component, inject} from '@angular/core';
import { AuthentificationComponent } from '../../common/components/authentification/authentification.component';
import {authentificationFormValuesType} from '../../common/components/authentification/types/authentification.type';
import {AuthentificationHttpService} from '../../common/services/authentification-http/authentification-http.service';
import {Router} from '@angular/router';
import {RegisterResponseInterface} from '../../common/models/apis/register.api.interface';
import {HttpErrorResponse} from '@angular/common/http';

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
  private readonly router =  inject(Router);

  public onRegister(authentificationFormValues : authentificationFormValuesType): void {
    console.log(authentificationFormValues);
    // il faut souscrire à l'observable httpClient afin qu'il puisse s'exécuter
    this.authentificationHttpService.register(authentificationFormValues).subscribe({
      next: (registrationResponse : RegisterResponseInterface) => {
        console.log( 'Registration successful !',registrationResponse);
        this.router.navigate(['/todos']);
      },
      error: (error : HttpErrorResponse) => {
        console.log( 'Registration failed !',error );
      },
      complete: () => {console.log('Registration completed !')}
    });
  }
}
