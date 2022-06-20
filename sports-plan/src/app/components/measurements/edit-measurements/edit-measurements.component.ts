import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Measurement } from 'src/app/shared/measurement/measurement.model';
import { MeasurementService } from 'src/app/shared/measurement/measurement.service';
import { MeasurementsComponent } from '../measurements.component';

@Component({
  selector: 'sports-edit-measurements',
  templateUrl: './edit-measurements.component.html',
  styleUrls: ['./edit-measurements.component.css']
})
export class EditMeasurementsComponent implements OnInit {

  public dateControl = new FormControl();
  public weightControl = new FormControl();
  public bodyFatControl = new FormControl();
  public waistControl = new FormControl();
  public bellyControl = new FormControl();
  public chestControl = new FormControl();
  public hipsControl = new FormControl();
  private _newMeasurement: Measurement = {
    id: 0,
    date: "",
    weight: 0,
    bodyFat: 0,
    waist: 0,
    belly: 0,
    chest: 0,
    hips: 0
  };

  constructor(private _measurementService: MeasurementService,
    private _measurementComponent: MeasurementsComponent) { }

  ngOnInit(): void {
  }

  public save() {
    this._newMeasurement.date = this.dateControl.value;
    this._newMeasurement.weight = this.weightControl.value;
    this._newMeasurement.bodyFat = this.bodyFatControl.value;
    this._newMeasurement.waist = this.waistControl.value;
    this._newMeasurement.belly = this.bellyControl.value;
    this._newMeasurement.chest = this.chestControl.value;
    this._newMeasurement.hips = this.hipsControl.value;


    this._measurementService.createMeasurement(this._newMeasurement).subscribe(() => this._measurementComponent.editMeasurement());
  }
}
