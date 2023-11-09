import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}
  // INTERCEPTAMOS EL REQ, LO EDITAMOS Y LE AGREGAMOS EL TOKEN.
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const localToken = localStorage.getItem('token');
    request = request.clone({
      headers: request.headers.set('Authorization', 'bearer ' + localToken),
    });
    return next.handle(request);
  }
}
