import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { UserService } from 'src/app/service/user.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private service: UserService | undefined;
  constructor(private injector: Injector) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.service = this.injector.get(UserService);
    const token: string = this.service.getUserFromStorage().accessToken;
    const type: string = this.service.getUserFromStorage().type;
    if (token != '' && token != null) {
      request = request.clone({
        setHeaders: {
          Authorization: `${type} ${token}`,
          'Content-Type': 'application/json',
        },
      });
    }
    return next.handle(request);
  }
}

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((response: any) => {
        if (response instanceof HttpErrorResponse && response.status === 401) {
          localStorage.removeItem('user');
          this.router.navigateByUrl('/');
        }
        return throwError(response);
      })
    );
  }
}
