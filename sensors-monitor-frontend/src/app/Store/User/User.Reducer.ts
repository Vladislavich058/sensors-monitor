import { loginSuccess, logout } from './User.Action';
import { createReducer, on } from '@ngrx/store';
import { UserState } from './User.State';

const _UserReducer = createReducer(
  UserState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      isAuth: true,
      currentUser: action.user,
    };
  }),
  on(logout, (state, action) => {
    return {
      ...state,
      isAuth: false,
      currentUser: null,
    };
  })
);

export function UserReducer(state: any, action: any) {
  return _UserReducer(state, action);
}
