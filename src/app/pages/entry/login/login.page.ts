import { User } from './../../../auth/interfaces/user';
import { AuthService } from './../../../auth/services/auth.service';
import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public userLogin: User = {};

  constructor(
    public menuCtrl: MenuController,
    private router: Router,
    private authService: AuthService
    ) { 
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.userLogin)
      .then(user => {
        this.router.navigate(['home']);
      })
      .catch(err => console.log(err));
  }

}
