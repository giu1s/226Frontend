import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  public hipstControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

  public save() {
    
  }
}
