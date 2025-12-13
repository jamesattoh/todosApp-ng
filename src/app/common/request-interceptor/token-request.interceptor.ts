import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {STORAGE_KEY} from '../constants/storage.const';
import {catchError} from 'rxjs';

export const tokenRequestInterceptor: HttpInterceptorFn = (req, next) => {
  // if (req.url.includes('register') || req.url.includes('login')) {return next(req)}

  const newReq = req.clone(
    {
      headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem(STORAGE_KEY.ACCESS_TOKEN)}`),
    }
  );
  return next(newReq).pipe(
    catchError((error: HttpErrorResponse)=> {
      switch (error.status) {
        case 0:
          console.log('Offline');
          alert('Vous n\'êtes pas connectés');
          break;

        case 400:
          break;
      }
      throw error;
    })
  );
};


/* Les intercepteurs de requêtes (HttpInterceptor) dans Angular sont des mécanismes puissants qui permettent d’intervenir
* avant qu’une requête HTTP parte vers le serveur ou après qu’une réponse soit reçue.

*
* les pipes permettent de transformer les données directement dans le template de votre composant, sans modifier
* le modèle de données sous-jacent (le code TypeScript) l'idée de faire passer des données à travers un "tuyau" de transformation */
