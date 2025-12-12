import {Component, inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TodosHttpService} from '../../common/services/todos-http/todos-http.service';

@Component({
  selector: 'app-todos-pages',
  imports: [],
  templateUrl: './todos-pages.component.html',
  styleUrl: './todos-pages.component.scss'
})
export class TodosPagesComponent implements OnInit {

  private readonly router = inject(Router);
  private readonly todosService = inject(TodosHttpService)

  ngOnInit() {
    this.todosService.getTodos().subscribe();
  }

  public goToCreateTaskPage(): void {
    this.router.navigate(['/todos/create']);
  }
}
