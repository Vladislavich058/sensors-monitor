import { UserService } from 'src/app/service/user.service';
import { loadTypes, loadTypesSuccess } from './Type.Action';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SensorService } from 'src/app/service/sensor.service';
import { showAlert } from '../Common/App.Action';
import { catchError, exhaustMap, of, map } from 'rxjs';

@Injectable()
export class TypeEffects {
  constructor(
    private actin$: Actions,
    private service: SensorService,
    private userService: UserService
  ) {}

  _loadTypes = createEffect(() =>
    this.actin$.pipe(
      ofType(loadTypes),
      exhaustMap((action) => {
        let prefix = this.userService
          .getUserFromStorage()
          .role.substring(5)
          .toLowerCase();
        return this.service.getTypes(prefix).pipe(
          map((data) => {
            return loadTypesSuccess({ list: data });
          }),
          catchError((_error) =>
            of(showAlert({ message: _error.error.message, result: 'fail' }))
          )
        );
      })
    )
  );
}
