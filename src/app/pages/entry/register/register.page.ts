import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../profile/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  users: any;
  userName: string;
  userAge: number;
  userAddress: string;
  userPhone: string;
  userEmail: string;
  userGender: string;
  userBio: string;
  userPassword: string;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.read_users().subscribe(data => {
 
      this.users = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          // Age: e.payload.doc.data()['Age'],
          // Address: e.payload.doc.data()['Address'],
          Phone: e.payload.doc.data()['Phone'],
          Email: e.payload.doc.data()['Email'],   
          Gender: e.payload.doc.data()['Gender'],
          // Bio: e.payload.doc.data()['Bio'],
          Password: e.payload.doc.data()['Password'],
        };
      })
      console.log(this.users);
 
    });
  }

  CreateRecord(){
    let record = {};
    record['Name'] = this.userName;
    // record['Address'] = this.userAddress;
    record['Phone'] = this.userPhone;
    record['Email'] = this.userEmail;   
    record['Gender'] = this.userGender; 
    // record['Bio'] = this.userBio;
    record['Password'] = this.userPassword;
    this.userService.create_NewUser(record).then(resp => {
      this.userName = "";
      // this.userAddress = "";
      this.userPhone = "";
      this.userEmail = "";
      this.userGender = "";
      // this.userBio = "";
      this.userPassword = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
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

}
