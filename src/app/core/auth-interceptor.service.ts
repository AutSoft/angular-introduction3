import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = '123456abcde';
    if (token) {
      const authReq = req.clone({headers: req.headers.set('Authorization', token)});
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
