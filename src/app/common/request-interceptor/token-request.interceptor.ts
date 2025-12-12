import { HttpInterceptorFn } from '@angular/common/http';

export const tokenRequestInterceptor: HttpInterceptorFn = (req, next) => {
  // if (req.url.includes('register') || req.url.includes('login')) {return next(req)}

  const newReq = req.clone(
    {
      headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem('access_token')}`),
    }
  );
  return next(newReq);
};
