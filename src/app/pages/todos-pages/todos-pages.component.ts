import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todos-pages',
  imports: [],
  templateUrl: './todos-pages.component.html',
  styleUrl: './todos-pages.component.scss'
})
export class TodosPagesComponent {

  private readonly router = inject(Router);

  public goToCreateTaskPage(): void {
    this.router.navigate(['/todos/create']);
  }
}
