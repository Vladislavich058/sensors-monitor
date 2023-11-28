import { logout } from './../../Store/User/User.Action';
import { UserService } from 'src/app/service/user.service';
import { User } from './../../Store/Model/User.model';
import {
  deleteSensor,
  loadSensor,
  getSensor,
  openpopup,
  searchSensor,
} from './../../Store/Sensor/Sensor.Action';
import { getSensorList } from './../../Store/Sensor/Sensor.Selectors';
import { Sensor } from './../../Store/Model/Sensor.model';
import { AddsensorComponent } from './../addsensor/addsensor.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormBuilder, Validators } from '@angular/forms';
import { getUser } from './../../Store/User/User.Selector';

@Component({
  selector: 'app-sensorlisting',
  templateUrl: './sensorlisting.component.html',
  styleUrl: './sensorlisting.component.css',
})
export class SensorlistingComponent implements OnInit {
  sensorList!: Sensor[];
  currentUser!: User | null;
  displayedColums: string[] = [
    'name',
    'model',
    'type',
    'range',
    'unit',
    'location',
  ];
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  searchValue = '';

  constructor(
    private dialog: MatDialog,
    private store: Store,
    private builder: FormBuilder,
    private service: UserService
  ) {}
  ngOnInit(): void {
    this.currentUser = this.service.getUserFromStorage();
    this.currentUser?.role === 'ROLE_ADMIN'
      ? this.displayedColums.push('action')
      : '';
    this.store.dispatch(loadSensor());
    this.store.select(getSensorList).subscribe((item) => {
      this.sensorList = item;
      this.dataSource = new MatTableDataSource<Sensor>(this.sensorList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  addSensor() {
    this.openPopup(0, 'Add sensor');
  }
  deleteSensor(id: number) {
    this.store.dispatch(deleteSensor({ id: id }));
  }
  editSensor(id: number) {
    this.openPopup(id, 'Edit sensor');
    this.store.dispatch(getSensor({ id: id }));
  }
  openPopup(code: number, title: string) {
    this.store.dispatch(openpopup());
    this.dialog.open(AddsensorComponent, {
      width: '30%',
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '200ms',
      data: {
        code: code,
        title: title,
      },
    });
  }
  searchForm = this.builder.group({
    searchValue: this.builder.control('', Validators.required),
  });
  search() {
    if (this.searchForm.valid) {
      this.store.dispatch(
        searchSensor({
          searchValue: this.searchForm.value.searchValue as string,
        })
      );
    }
  }
  reset() {
    this.store.dispatch(loadSensor());
  }
  logout() {
    this.store.dispatch(logout());
  }
}
