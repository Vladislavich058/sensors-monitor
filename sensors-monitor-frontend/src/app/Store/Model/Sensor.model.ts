import { Unit } from './Unit.model';
import { Type } from './Type.model';
export interface Sensor {
  id?: number;
  name: string;
  model: string;
  startRange: number;
  endRange: number;
  type: Type;
  unit: Unit;
  location: string;
  description: string;
}

export interface SensorModel {
  list: Sensor[];
  sensorObj: Sensor;
}
