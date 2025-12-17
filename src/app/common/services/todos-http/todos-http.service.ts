import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {STORAGE_KEY} from '../../constants/storage.const';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodosHttpService {

  private readonly httpClient = inject(HttpClient);

  public getTodos(): Observable<[]> {
    return this.httpClient.get<[]>(`${environment.baseUrl}/todos/`) // il s'agit d'un observable ici à cause du return, la nature asynchrone des requêtes http dans angular
  }
}
