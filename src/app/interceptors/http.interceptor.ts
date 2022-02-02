import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class VitHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers
        .set('Accept', 'application/json')
        .set(
          'Authorization',
          'Bearer ReYCDUn7PEKfu6FeD8WTFZM4E5isvzoWSyvgJ2es5KRrwKpsJZM'
        ),
    });

    return next.handle(authReq);
  }
}
