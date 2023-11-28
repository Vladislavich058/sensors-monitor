import { loadTypesSuccess } from './Type.Action';
import { createReducer, on } from '@ngrx/store';
import { TypeState } from './Type.State';

const _TypeReducer = createReducer(
  TypeState,
  on(loadTypesSuccess, (state, action) => {
    return {
      ...state,
      list: [...action.list],
    };
  })
);

export function TypeReducer(state: any, action: any) {
  return _TypeReducer(state, action);
}
