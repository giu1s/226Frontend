import { Component, OnInit, ViewChild } from '@angular/core';
import { Measurement } from 'src/app/shared/measurement/measurement.model';
import { MeasurementService } from 'src/app/shared/measurement/measurement.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTable} from '@angular/material/table';


@Component({
  selector: 'sports-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']
})


export class MeasurementsComponent implements OnInit {
  displayedColumns: string[] = ['date', 'weight', 'bodyFat', 'waist', 'belly', 'chest', 'hips'];
  public measurements!: Measurement[];
  
  @ViewChild(MatTable)
  table!: MatTable<Measurement>; 

  constructor(private _measurementService: MeasurementService) { }

  ngOnInit(): void {
    this.getAllMeasurements();
    console.log(this.measurements)
  }

  public getAllMeasurements(){
    this._measurementService.getAllMeasurement().subscribe(measurements => this.measurements =  measurements)
  }

  addData() {
    // const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    // this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    // // this.table.renderRows();
  }

  removeData() {
    // this.dataSource.pop();
    // this.table.renderRows();
  }


}
