import { Unit } from './../Model/Unit.model';
import { createAction, props } from '@ngrx/store';

export const LOAD_UNITS = '[unit page]load units';
export const LOAD_UNITS_SUCCES = '[unit page]load units succes';

export const loadUnits = createAction(LOAD_UNITS);
export const loadUnitsSuccess = createAction(
  LOAD_UNITS_SUCCES,
  props<{ list: Unit[] }>()
);
