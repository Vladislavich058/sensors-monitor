import { createReducer, on } from '@ngrx/store';
import { Type } from './../Model/Type.model';
import { Unit } from './../Model/Unit.model';
import {
  addSensorSuccess, deleteSensorSuccess, getSensorSuccess, loadSensorSucces, openpopup,
  searchSensor, updateSensorSuccess
} from './Sensor.Action';
import { SensorState } from './Sensor.State';

const _SensorReducer = createReducer(
  SensorState,
  on(loadSensorSucces, (state, action) => {
    return {
      ...state,
      list: [...action.list],
    };
  }),
  on(getSensorSuccess, (state, action) => {
    return {
      ...state,
      sensorObj: action.obj,
    };
  }),
  on(addSensorSuccess, (state, action) => {
    return {
      ...state,
      list: [...state.list, action.inputdata],
    };
  }),
  on(updateSensorSuccess, (state, action) => {
    const _newdata = state.list.map((o) => {
      return o.id === action.inputdata.id ? action.inputdata : o;
    });
    return {
      ...state,
      list: _newdata,
    };
  }),
  on(deleteSensorSuccess, (state, action) => {
    const _newdata = state.list.filter((o) => o.id !== action.id);
    return {
      ...state,
      list: _newdata,
    };
  }),
  on(openpopup, (state, action) => {
    return {
      ...state,
      sensorObj: {
        id: 0,
        name: '',
        model: '',
        startRange: 0,
        endRange: 1,
        type: {} as Type,
        unit: {} as Unit,
        location: '',
        description: '',
      },
    };
  }),
  on(searchSensor, (state, action) => {
    const _searchdata = state.list.filter(
      (o) =>
        o.name.toLowerCase().includes(action.searchValue.toLocaleLowerCase()) ||
        o.model
          .toLowerCase()
          .includes(action.searchValue.toLocaleLowerCase()) ||
        o.type.name
          .toLowerCase()
          .includes(action.searchValue.toLocaleLowerCase()) ||
        o.unit.name
          .toLowerCase()
          .includes(action.searchValue.toLocaleLowerCase()) ||
        o.description
          .toLowerCase()
          .includes(action.searchValue.toLocaleLowerCase()) ||
        o.location
          .toLowerCase()
          .includes(action.searchValue.toLocaleLowerCase())
    );
    return {
      ...state,
      list: _searchdata,
    };
  })
);

export function SensorReducer(state: any, action: any) {
  return _SensorReducer(state, action);
}
