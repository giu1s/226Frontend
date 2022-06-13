import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user/user.model';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
  selector: 'sports-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  public currentUser: User = {id:0 , firstname: "", lastname: "", birthdate: "", height: 0 };
  
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.getUserDetails();
  }
  

  public getUserDetails(){
    this._userService.getUser(1).subscribe(user => this.currentUser = user);
  }

  public save(){

  }
}