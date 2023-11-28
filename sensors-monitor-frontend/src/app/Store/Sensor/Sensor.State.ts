import { Unit } from './../Model/Unit.model';
import { Type } from './../Model/Type.model';
import { SensorModel } from './../Model/Sensor.model';
export const SensorState: SensorModel = {
  list: [],
  sensorObj: {
    id: 0,
    name: '',
    model: '',
    type: {} as Type,
    unit: {} as Unit,
    startRange: 0,
    endRange: 1,
    location: '',
    description: '',
  },
};
