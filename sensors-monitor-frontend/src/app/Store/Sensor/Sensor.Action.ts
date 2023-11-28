import { Sensor } from './../Model/Sensor.model';
import { createAction, props } from '@ngrx/store';

export const LOAD_SENSOR = '[sensor page]load sensor';
export const LOAD_SENSOR_SUCCES = '[sensor page]load sensor succes';
export const LOAD_SENSOR_FAIL = '[sensor page]load sensor fail';
export const ADD_SENSOR = '[sensor page]add sensor';
export const ADD_SENSOR_SUCCESS = '[sensor page]add sensor success';
export const UPDATE_SENSOR = '[sensor page]update sensor';
export const UPDATE_SENSOR_SUCCESS = '[sensor page]update sensor success';
export const DELETE_SENSOR = '[sensor page]delete sensor';
export const DELETE_SENSOR_SUCCESS = '[sensor page]delete sensor success';
export const GET_SENSOR = '[sensor page]get sensor';
export const GET_SENSOR_SUCCESS = '[sensor page]get sensor success';
export const OPEN_POPUP = '[sensor page]open popup';
export const SEARCH_SENSOR = '[sensor page]search sensor';

export const loadSensor = createAction(LOAD_SENSOR);
export const loadSensorSucces = createAction(
  LOAD_SENSOR_SUCCES,
  props<{ list: Sensor[] }>()
);
export const loadSensorFail = createAction(
  LOAD_SENSOR_FAIL,
  props<{ error: string }>()
);
export const addSensor = createAction(
  ADD_SENSOR,
  props<{ inputdata: Sensor }>()
);
export const addSensorSuccess = createAction(
  ADD_SENSOR_SUCCESS,
  props<{ inputdata: Sensor }>()
);
export const updateSensor = createAction(
  UPDATE_SENSOR,
  props<{ inputdata: Sensor }>()
);
export const updateSensorSuccess = createAction(
  UPDATE_SENSOR_SUCCESS,
  props<{ inputdata: Sensor }>()
);
export const deleteSensor = createAction(
  DELETE_SENSOR,
  props<{ id: number }>()
);
export const deleteSensorSuccess = createAction(
  DELETE_SENSOR_SUCCESS,
  props<{ id: number }>()
);
export const getSensor = createAction(GET_SENSOR, props<{ id: number }>());
export const getSensorSuccess = createAction(
  GET_SENSOR_SUCCESS,
  props<{ obj: Sensor }>()
);
export const openpopup = createAction(OPEN_POPUP);
export const searchSensor = createAction(
  SEARCH_SENSOR,
  props<{ searchValue: string }>()
);
