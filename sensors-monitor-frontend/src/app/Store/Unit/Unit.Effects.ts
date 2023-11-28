import { UserService } from 'src/app/service/user.service';
import { loadUnits, loadUnitsSuccess } from './Unit.Action';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SensorService } from 'src/app/service/sensor.service';
import { showAlert } from '../Common/App.Action';
import { catchError, exhaustMap, of, map } from 'rxjs';

@Injectable()
export class UnitEffects {
  constructor(
    private actin$: Actions,
    private service: SensorService,
    private userService: UserService
  ) {}

  _loadUnits = createEffect(() =>
    this.actin$.pipe(
      ofType(loadUnits),
      exhaustMap((action) => {
        let prefix = this.userService
          .getUserFromStorage()
          .role.substring(5)
          .toLowerCase();
        return this.service.getUnits(prefix).pipe(
          map((data) => {
            return loadUnitsSuccess({ list: data });
          }),
          catchError((_error) =>
            of(showAlert({ message: _error.error.message, result: 'fail' }))
          )
        );
      })
    )
  );
}
