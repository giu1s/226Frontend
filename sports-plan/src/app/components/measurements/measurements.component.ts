import { Component, OnInit, ViewChild } from '@angular/core';
import { Measurement } from 'src/app/shared/measurement/measurement.model';
import { MeasurementService } from 'src/app/shared/measurement/measurement.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTable} from '@angular/material/table';

const ELEMENT_DATA: Measurement[] =[
  {
    "id": 2,
    "date": "20.0.02",
    "weight": 70.0,
    "bodyFat": 23.0,
    "waist": 60.0,
    "belly": 60.0,
    "chest": 60.0,
    "hips": 90.0
  },
  {
    "id": 3,
    "date": "21.0.02",
    "weight": 70.0,
    "bodyFat": 23.0,
    "waist": 60.0,
    "belly": 60.0,
    "chest": 60.0,
    "hips": 90.0
  }
]
@Component({
  selector: 'sports-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']
})


export class MeasurementsComponent implements OnInit {
  dataSource = [...ELEMENT_DATA];
  displayedColumns: string[] = ['date', 'weight', 'bodyFat', 'waist', 'belly', 'chest', 'hips'];
  public measurements!: Measurement[];
  
  @ViewChild(MatTable)
  table!: MatTable<Measurement>; 

  constructor(private _measurementService: MeasurementService) { }

  ngOnInit(): void {
    this.getAllMeasurements();
  }

  public getAllMeasurements(){
    this._measurementService.getAllMeasurement().subscribe(measurements => this.dataSource = measurements)
  }

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    // this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    // this.table.renderRows();
  }


}
