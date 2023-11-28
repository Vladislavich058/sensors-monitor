import { TypeModel } from './../Model/Type.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getTypeState = createFeatureSelector<TypeModel>('type');

export const getTypeList = createSelector(getTypeState, (state) => {
  return state.list;
});
