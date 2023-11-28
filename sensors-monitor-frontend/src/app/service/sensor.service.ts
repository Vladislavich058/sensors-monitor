import { UserService } from 'src/app/service/user.service';
import { Unit } from './../Store/Model/Unit.model';
import { Sensor } from './../Store/Model/Sensor.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Type } from '../Store/Model/Type.model';

@Injectable({
  providedIn: 'root',
})
export class SensorService {
  baseURL = 'http://localhost:8080/api/';
  constructor(private http: HttpClient) {}
  getAll(prefix: string) {
    return this.http.get<Sensor[]>(this.baseURL + prefix + '/sensors');
  }
  getTypes(prefix: string) {
    return this.http.get<Type[]>(this.baseURL + prefix + '/types');
  }
  getUnits(prefix: string) {
    return this.http.get<Unit[]>(this.baseURL + prefix + '/units');
  }
  getById(prefix: string, id: number) {
    return this.http.get<Sensor>(this.baseURL + prefix + '/sensor/' + id);
  }
  delete(prefix: string, id: number) {
    return this.http.delete(this.baseURL + prefix + '/sensor/' + id);
  }
  update(prefix: string, data: Sensor) {
    return this.http.patch(this.baseURL + prefix + '/sensor', data);
  }
  create(prefix: string, data: Sensor) {
    return this.http.post(this.baseURL + prefix + '/sensor', data);
  }
}
