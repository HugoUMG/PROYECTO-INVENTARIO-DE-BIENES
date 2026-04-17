import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const basicAuthInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.basicToken();
  if (!token || token === btoa(':')) {
    return next(req);
  }
  const authenticated = req.clone({
    setHeaders: {
      Authorization: `Basic ${token}`
    }
  });
  return next(authenticated);
};
