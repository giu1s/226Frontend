import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user/user.service';
import { User } from 'src/app/shared/user/user.model';

@Component({
  selector: 'sports-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {

  public currentUser: User = {id:0 , firstname: "", lastname: "", birthdate: "", height: 0 };
  public users!: User[];
  public edit: boolean = false;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    // this.getAllUser();
    this.getUserDetails();
  }

  public getAllUser(){
    this._userService.getAll().subscribe(users => {
      this.users = users;
    });
  }

  public getUserDetails(){
    this._userService.get(1).subscribe(user => this.currentUser = user);
  }

  // TODO: move this to user service
  public editUser(){
    if (this.edit) {
      this.edit = false;
      this.getUserDetails();
    }
    else this.edit = true;
  }
}
