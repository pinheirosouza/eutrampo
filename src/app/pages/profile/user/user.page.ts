import { Observable } from 'rxjs';
import { AuthService } from './../../../auth/services/auth.service';
import { User } from './../../../auth/interfaces/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  public user: Observable<User>;
  public userUpdate: User = {};

  constructor(
    private userService: UserService,
    private authService: AuthService
    ) { }

  ngOnInit() {
    console.log(this.user)
    this.user = this.userService.readUser(this.authService.getId()).valueChanges();
    console.log(this.authService.getId());
    console.log(this.user)
  }


  RemoveRecord(rowID) {
    this.userService.delete_user(rowID);
  }
 
  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditAge = record.Age;
    record.EditAddress = record.Address;
  }
 
  UpdateRecord(recordRow) {
    let record = {};
    record['Name'] = recordRow.EditName;
    record['Age'] = recordRow.EditAge;
    record['Address'] = recordRow.EditAddress;
    this.userService.update_user(recordRow.id, record);
    recordRow.isEdit = false;
  }

  updateRecord(){
    this.authService.updateEmail(this.userUpdate.email);
    this.userService.update_user(this.authService.getId(),this.userUpdate);
  }

}
