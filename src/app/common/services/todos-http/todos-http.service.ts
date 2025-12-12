import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosHttpService {

  private readonly httpClient = inject(HttpClient);

  public getTodos() {
    return this.httpClient.get('http://95.111.253.41:8000/todos/', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}` // recuperation du token pour permettre la realisation de la requete
      }
    })
  }
}
