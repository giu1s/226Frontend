import { Component, OnInit, ViewChild } from '@angular/core';
import { Measurement } from 'src/app/shared/measurement/measurement.model';
import { MeasurementService } from 'src/app/shared/measurement/measurement.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTable } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { EditMeasurementsComponent } from './edit-measurements/edit-measurements.component';


@Component({
  selector: 'sports-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']
})


export class MeasurementsComponent implements OnInit {
  displayedColumns: string[] = ['date', 'weight', 'bodyFat', 'waist', 'belly', 'chest', 'hips'];
  public measurements!: Measurement[];
  public edit: boolean = false;
  public selection = new SelectionModel<Measurement>(true, []);
  public currentMeasurement: Measurement = {id:0, date:"", weight:0, bodyFat:0, waist:0, belly:0, chest:0, hips:0};
  

  @ViewChild(MatTable)
  table!: MatTable<Measurement>;

  constructor(private _measurementService: MeasurementService
    
    ) { }

  ngOnInit(): void {
    this.getAllMeasurements();
  }

  public getAllMeasurements() {
    this._measurementService.getAllMeasurement().subscribe(measurements => {
      this.measurements = measurements})
  }

  addData() {
    this.editMeasurement();
  }

  removeData() {
    console.log(this.currentMeasurement.id);
    this._measurementService.deleteMeasurement(this.currentMeasurement.id).subscribe(() => this.getAllMeasurements);
  }

  // TODO: move this to user service
  public editMeasurement() {
    if (this.edit) {
      this.edit = false;
      this.getAllMeasurements();
      this.currentMeasurement = {id:0, date:"", weight:0, bodyFat:0, waist:0, belly:0, chest:0, hips:0};
    }
    else this.edit = true;
  }

  public updateData(){
    this.editMeasurement();
  }

  public choose(measurement: Measurement){
    this.currentMeasurement = measurement;
  }

}
