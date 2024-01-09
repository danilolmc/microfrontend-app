import { HttpInterceptorFn } from '@angular/common/http';

export const productInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
