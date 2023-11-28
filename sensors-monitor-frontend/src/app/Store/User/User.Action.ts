import { User, UserCred } from './../Model/User.model';
import { createAction, props } from '@ngrx/store';

export const LOGIN = '[auth] login';
export const LOGIN_SUCCESS = '[auth] login success';
export const LOGOUT = '[auth] logout';

export const login = createAction(LOGIN, props<{ userCred: UserCred }>());
export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ user: User }>()
);
export const logout = createAction(LOGOUT);
