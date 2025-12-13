import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {STORAGE_KEY} from '../../constants/storage.const';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosHttpService {

  private readonly httpClient = inject(HttpClient);

  public getTodos(): Observable<[]> {
    return this.httpClient.get<[]>('http://95.111.253.41:8000/todos/') // il s'agit d'un observable ici à cause du return, la nature asynchrone des requêtes http dans angular
  }
}
