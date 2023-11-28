import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap, tap } from 'rxjs';
import { UserService } from 'src/app/service/user.service';
import { showAlert } from '../Common/App.Action';
import { User } from '../Model/User.model';
import { login, loginSuccess, logout } from './User.Action';

@Injectable()
export class UserEffect {
  constructor(
    private action$: Actions,
    private service: UserService,
    private route: Router
  ) {}

  _userlogin = createEffect(() =>
    this.action$.pipe(
      ofType(login),
      switchMap((action) => {
        return this.service.login(action.userCred).pipe(
          switchMap((data: User) => {
            this.service.setUserToStorage(data);
            this.route.navigateByUrl('/sensors');
            return of(
              loginSuccess({ user: data }),
              showAlert({ message: 'Login success.', result: 'pass' })
            );
          }),
          catchError((_error) =>
            of(
              showAlert({
                message: _error.error.message,
                result: 'fail',
              })
            )
          )
        );
      })
    )
  );

  _logout = createEffect(
    () =>
      this.action$.pipe(
        ofType(logout),
        tap((user) => {
          localStorage.removeItem('user');
          this.route.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );
}
