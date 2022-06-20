import { Component, OnInit, ViewChild } from '@angular/core';
import { Measurement } from 'src/app/shared/measurement/measurement.model';
import { MeasurementService } from 'src/app/shared/measurement/measurement.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTable } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';


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

  @ViewChild(MatTable)
  table!: MatTable<Measurement>;

  constructor(private _measurementService: MeasurementService) { }

  ngOnInit(): void {
    this.getAllMeasurements();
  }

  public getAllMeasurements() {
    this._measurementService.getAllMeasurement().subscribe(measurements => {
      console.log(this.measurements)
      this.measurements = measurements})
  }

  addData() {
    this.editMeasurement();
  }

  removeData() {
    // this.dataSource.pop();
    // this.table.renderRows();
  }

  // TODO: move this to user service
  public editMeasurement() {
    if (this.edit) {
      this.edit = false;
      this.getAllMeasurements();
      console.log(this.measurements);
    }
    else this.edit = true;
  }


}
