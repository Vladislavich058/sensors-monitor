import { createReducer, on } from '@ngrx/store';
import { loadUnitsSuccess } from './Unit.Action';
import { UnitState } from './Unit.State';
const _UnitReducer = createReducer(
  UnitState,
  on(loadUnitsSuccess, (state, action) => {
    return {
      ...state,
      list: [...action.list],
    };
  })
);

export function UnitReducer(state: any, action: any) {
  return _UnitReducer(state, action);
}
