import { Password } from './../../../../shared/interfaces/password';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  public password: Password = {}

  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit() {
  }

  changePassword() {
    console.log(this.password)
    this.authService.updatePassword(this.password, this.authService.user._id).then(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
