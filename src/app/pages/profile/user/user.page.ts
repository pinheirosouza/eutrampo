import { Observable } from 'rxjs';
import { AuthService } from './../../../auth/services/auth.service';
import { User } from './../../../auth/interfaces/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user_services/user.service';

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

  updateRecord(){
    this.authService.updateEmail(this.userUpdate.email);
    this.userService.update_user(this.authService.getId(),this.userUpdate);
  }

  deleteRecord() {
    this.authService.deleteCurrentUser()
    this.userService.deleteUser(this.authService.getId());
  }

}
