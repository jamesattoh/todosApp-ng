import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {tokenRequestInterceptor} from './common/request-interceptor/token-request.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([tokenRequestInterceptor])) //avec angular 21, on n'a plus besoin de preciser le provider httpclient mais pour les interceptors, il le faut
  ]
};
