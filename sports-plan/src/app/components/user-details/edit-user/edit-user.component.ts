import { convertFromMaybeForwardRefExpression } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from 'src/app/shared/user/user.model';
import { UserService } from 'src/app/shared/user/user.service';
import { UserDetailsComponent } from '../user-details.component';
@Component({
  selector: 'sports-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  public currentUser: User = {id:0 , firstname: "", lastname: "", birthdate: "", height: 0 };
  public firstnameControl = new FormControl();
  public lastnameControl = new FormControl();
  public heightControl = new FormControl();
  public birthdateControl = new FormControl();

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.getUserDetails();
  }
  

  public getUserDetails(){
    this._userService.get(1).subscribe(user => {
      this.currentUser = user
      this.setForm();
    });
  }

  public save(){
    this.currentUser.firstname = this.firstnameControl.value;
    this.currentUser.lastname = this.lastnameControl.value;
    this.currentUser.birthdate = this.birthdateControl.value;
    this.currentUser.height = this.heightControl.value;
    this._userService.update(this.currentUser).subscribe();
    this._userService.edit().subscribe();
  }

  public setForm(){
    this.firstnameControl.setValue(this.currentUser.firstname);
    this.lastnameControl.setValue(this.currentUser.lastname);
    this.birthdateControl.setValue(this.currentUser.birthdate);
    this.heightControl.setValue(this.currentUser.height);
  }
}