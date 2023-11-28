import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MatSnackBar } from '@angular/material/snack-bar';
import { emptyAction, showAlert } from './App.Action';
import { exhaustMap, map } from 'rxjs';

@Injectable()
export class AppEffects {
  constructor(private $action: Actions, private _snackbar: MatSnackBar) {}

  _showalert = createEffect(() =>
    this.$action.pipe(
      ofType(showAlert),
      exhaustMap((action) => {
        return this.ShowSnackBar(action.message, action.result)
          .afterDismissed()
          .pipe(
            map(() => {
              return emptyAction();
            })
          );
      })
    )
  );

  ShowSnackBar(message: string, result: string) {
    let _class = result === 'pass' ? 'successSnackBar' : 'failSnackBar';
    return this._snackbar.open(message, 'OK', {
      verticalPosition: 'top',
      horizontalPosition: 'end',
      duration: 5000,
      panelClass: [_class],
    });
  }
}
