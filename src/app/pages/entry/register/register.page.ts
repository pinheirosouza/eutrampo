import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from './../../../auth/interfaces/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../shared/services/user_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public userRegister: User = {};

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
  ) { }

  ngOnInit() {}
  
  async createRecord()
  {
    //Registrando no Auth
    try {await this.authService.register(this.userRegister);
    } catch(error){
      console.log(error);
    } finally {
      return new Promise(async resolve => {
        try {
          await this.userService.create_NewUser(this.userRegister, this.authService.getId());
          console.log(this.userRegister);
        } catch(error) {
            console.log(error);
          };
      }) ;
    }
  }

}
