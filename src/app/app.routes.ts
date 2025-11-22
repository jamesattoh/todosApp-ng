import { Routes } from '@angular/router';
import {TodosPagesComponent} from './pages/todos-pages/todos-pages.component';
import {CreateTodoPageComponent} from './pages/todos-pages/create-todo-page/create-todo-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/todos',
    pathMatch: 'full',
  },
  {
    path: 'todos',
    children: [ // bien faire attention aux redirections de l'app
      {
        path: '',
        component: TodosPagesComponent,
      },
      {
        path: 'create',
        component: CreateTodoPageComponent,
      }
    ]
  },
  // {
  //   path: 'todos/create',
  //   component: CreateTodoPageComponent
  // }
];
