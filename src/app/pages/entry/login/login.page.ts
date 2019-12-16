import { User } from './../../../auth/interfaces/user';
import { AuthService } from './../../../auth/services/auth.service';
import { MenuController, NavController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  public userLogin: User = {};

  constructor(
    // public navCtrl: NavController,
    public menuCtrl: MenuController,
    private router: Router,
    private authService: AuthService
    ) { }
    
  async login() {
    try {
      await this.authService.login(this.userLogin);
    } catch(error) {
      console.log(error);
    } finally {
      this.router.navigate(['home']);
    }
  }
  
  signNav() {
    this.router.navigate(['register']);
  }

}
