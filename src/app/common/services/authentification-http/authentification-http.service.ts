import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RegisterResponseInterface, RegistrationPayloadInterface} from '../../models/apis/register.api.interface';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root' //cet attribut indique à l'app que le service sera dispo dès le lancement de l'app
})
export class AuthentificationHttpService {

  // inject : l'injection de dependance permet d'ignorer la structure de la classe dont on veut utiliser les méthodes/proprietes
  // en lieu et place de créer une instance pour utiliser la classer (avec new) on utilise inject
  private httpClient = inject(HttpClient);

  public register(registrationPayload: RegistrationPayloadInterface) : Observable<RegisterResponseInterface> {
     return this.httpClient.post<RegisterResponseInterface>(`${environment.baseUrl}/register`, registrationPayload)
  }
}
