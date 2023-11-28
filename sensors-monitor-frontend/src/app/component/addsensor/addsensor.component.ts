import { loadUnits } from './../../Store/Unit/Unit.Action';
import { loadTypes } from './../../Store/Type/Type.Action';
import { getUnitList } from './../../Store/Unit/Unit.Selectors';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import {
  lessThanValidator,
  notEmptyObjectValidator,
} from 'src/app/validators/validators';
import { Sensor } from './../../Store/Model/Sensor.model';
import { Type } from './../../Store/Model/Type.model';
import { Unit } from './../../Store/Model/Unit.model';
import { addSensor, updateSensor } from './../../Store/Sensor/Sensor.Action';
import { getSensor } from './../../Store/Sensor/Sensor.Selectors';
import { getTypeList } from './../../Store/Type/Type.Selectors';

@Component({
  selector: 'app-addsensor',
  templateUrl: './addsensor.component.html',
  styleUrl: './addsensor.component.css',
})
export class AddsensorComponent implements OnInit {
  title = 'Add sensor';
  dialogdata: any;
  isEdit!: false;
  typeList!: Type[];
  unitList!: Unit[];

  constructor(
    private builder: FormBuilder,
    private ref: MatDialogRef<AddsensorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.dialogdata = this.data;
    this.title = this.dialogdata.title;
    this.store.select(getSensor).subscribe((res) => {
      this.sensorForm.setValue({
        id: res.id,
        name: res.name,
        model: res.model,
        startRange: res.startRange,
        endRange: res.endRange,
        type: res.type,
        unit: res.unit,
        location: res.location,
        description: res.description,
      });
    });

    this.store.dispatch(loadTypes());
    this.store.dispatch(loadUnits());
    this.store.select(getTypeList).subscribe((res) => {
      this.typeList = res;
    });
    this.store.select(getUnitList).subscribe((res) => {
      this.unitList = res;
    });
  }

  closePopup() {
    this.ref.close();
  }

  sensorForm = this.builder.group(
    {
      id: this.builder.control(0),
      name: this.builder.control('', [
        Validators.maxLength(30),
        Validators.required,
      ]),
      model: this.builder.control('', [
        Validators.maxLength(15),
        Validators.required,
      ]),
      startRange: this.builder.control(0, [
        Validators.required,
        Validators.pattern('^[-]?[0-9]+$'),
      ]),
      endRange: this.builder.control(1, [
        Validators.required,
        Validators.pattern('^[-]?[0-9]+$'),
      ]),
      type: this.builder.control('', [
        Validators.required,
        notEmptyObjectValidator,
      ]),
      unit: this.builder.control('', [
        Validators.required,
        notEmptyObjectValidator,
      ]),
      location: this.builder.control('', [
        Validators.required,
        Validators.maxLength(40),
      ]),
      description: this.builder.control('', [
        Validators.required,
        Validators.maxLength(200),
      ]),
    },
    { validator: lessThanValidator('startRange', 'endRange') }
  );
  saveSensor() {
    if (this.sensorForm.valid) {
      const _obj: Sensor = {
        id: this.sensorForm.value.id as number,
        name: this.sensorForm.value.name as string,
        model: this.sensorForm.value.model as string,
        startRange: this.sensorForm.value.startRange as number,
        endRange: this.sensorForm.value.endRange as number,
        type: this.sensorForm.value.type as Type,
        unit: this.sensorForm.value.unit as Unit,
        location: this.sensorForm.value.location as string,
        description: this.sensorForm.value.description as string,
      };
      if (_obj.id === 0) {
        this.store.dispatch(addSensor({ inputdata: _obj }));
      } else {
        this.store.dispatch(updateSensor({ inputdata: _obj }));
      }
      this.closePopup();
    }
  }

  compareObjects(object1: any, object2: any) {
    return object1 && object2 && object1.id == object2.id;
  }
}
