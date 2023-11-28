import { SensorModel } from './../Model/Sensor.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getSensorState = createFeatureSelector<SensorModel>('sensor');

export const getSensorList = createSelector(getSensorState, (state) => {
  return state.list;
});

export const getSensor = createSelector(getSensorState, (state) => {
  return state.sensorObj;
});
