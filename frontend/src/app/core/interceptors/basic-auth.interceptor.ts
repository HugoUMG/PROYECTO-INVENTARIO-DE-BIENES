import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const basicAuthInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
<<<<<<< HEAD
  if (!auth.isLoggedIn()) {
    return next(req);
  }

  const authenticated = req.clone({
    setHeaders: {
      Authorization: `Basic ${auth.basicToken()}`
    }
  });

  return next(authenticated);
=======
  const apiUrl = 'https://proyectoweb-wgny.onrender.com';
  
  const newReq = req.url.startsWith('/api') 
    ? req.clone({ url: `${apiUrl}${req.url}` }) 
    : req;

  const token = auth.basicToken();
  if (!token || token === btoa(':')) {
    return next(newReq);
  }
  
  return next(newReq.clone({
    setHeaders: { Authorization: `Basic ${token}` }
  }));
>>>>>>> viejo/main
};
