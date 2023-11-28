import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UnitModel } from '../Model/Unit.model';

const getUnitState = createFeatureSelector<UnitModel>('unit');

export const getUnitList = createSelector(getUnitState, (state) => {
  return state.list;
});
