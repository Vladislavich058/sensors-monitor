import { Type } from './../Model/Type.model';
import { createAction, props } from '@ngrx/store';

export const LOAD_TYPES = '[type page]load types';
export const LOAD_TYPES_SUCCES = '[type page]load types succes';

export const loadTypes = createAction(LOAD_TYPES);
export const loadTypesSuccess = createAction(
  LOAD_TYPES_SUCCES,
  props<{ list: Type[] }>()
);
