import { UserService } from 'src/app/service/user.service';
import {
  loadSensor,
  loadSensorSucces,
  loadSensorFail,
  addSensor,
  addSensorSuccess,
  updateSensor,
  updateSensorSuccess,
  deleteSensor,
  deleteSensorSuccess,
  getSensorSuccess,
  getSensor,
} from './Sensor.Action';
import { SensorService } from './../../service/sensor.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, of, map, switchMap, throwError } from 'rxjs';
import { showAlert } from '../Common/App.Action';

@Injectable()
export class SensorEffects {
  constructor(
    private actin$: Actions,
    private service: SensorService,
    private userService: UserService
  ) {}

  _loadSensor = createEffect(() =>
    this.actin$.pipe(
      ofType(loadSensor),
      exhaustMap((action) => {
        let prefix = this.userService
          .getUserFromStorage()
          .role.substring(5)
          .toLowerCase();
        return this.service.getAll(prefix).pipe(
          map((data) => {
            return loadSensorSucces({ list: data });
          }),
          catchError((_error) =>
            of(showAlert({ message: _error.error.message, result: 'fail' }))
          )
        );
      })
    )
  );

  _addSensor = createEffect(() =>
    this.actin$.pipe(
      ofType(addSensor),
      switchMap((action) => {
        let prefix = this.userService
          .getUserFromStorage()
          .role.substring(5)
          .toLowerCase();
        return this.service.create(prefix, action.inputdata).pipe(
          switchMap((data) => {
            return of(
              addSensorSuccess({ inputdata: action.inputdata }),
              showAlert({
                message: 'Sensor added successfully',
                result: 'pass',
              })
            );
          }),
          catchError((_error) =>
            of(showAlert({ message: _error.error.message, result: 'fail' }))
          )
        );
      })
    )
  );
  _updateSensor = createEffect(() =>
    this.actin$.pipe(
      ofType(updateSensor),
      switchMap((action) => {
        let prefix = this.userService
          .getUserFromStorage()
          .role.substring(5)
          .toLowerCase();
        return this.service.update(prefix, action.inputdata).pipe(
          switchMap((data) => {
            return of(
              updateSensorSuccess({ inputdata: action.inputdata }),
              showAlert({
                message: 'Sensor updated successfully.',
                result: 'pass',
              })
            );
          }),
          catchError((_error) =>
            of(showAlert({ message: _error.error.message, result: 'fail' }))
          )
        );
      })
    )
  );
  _deleteSensor = createEffect(() =>
    this.actin$.pipe(
      ofType(deleteSensor),
      switchMap((action) => {
        let prefix = this.userService
          .getUserFromStorage()
          .role.substring(5)
          .toLowerCase();
        return this.service.delete(prefix, action.id).pipe(
          switchMap((data) => {
            return of(
              deleteSensorSuccess({ id: action.id }),
              showAlert({
                message: 'Sensor deleted successfully.',
                result: 'pass',
              })
            );
          }),
          catchError((_error) =>
            of(showAlert({ message: _error.error.message, result: 'fail' }))
          )
        );
      })
    )
  );
  _getSensor = createEffect(() =>
    this.actin$.pipe(
      ofType(getSensor),
      exhaustMap((action) => {
        let prefix = this.userService
          .getUserFromStorage()
          .role.substring(5)
          .toLowerCase();
        return this.service.getById(prefix, action.id).pipe(
          map((data) => {
            return getSensorSuccess({ obj: data });
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
}
