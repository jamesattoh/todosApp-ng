import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root' //cet attribut indique à l'app que le service sera dispo dès le lancement de l'app
})
export class AuthentificationHttpService {

  private httpClient = inject(HttpClient);

  public register({email, password} : {email:string, password:string}) {
    return this.httpClient.post('http://95.111.253.41:8000/register', {email, password})
  }
}
