import { Observable } from 'rxjs';
import { User } from './../../auth/interfaces/user';
import { AuthService } from 'src/app/auth/services/auth.service';
import { UserService } from 'src/app/shared/services/user_services/user.service';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  private foto_perfil = "../../../assets/img/perfil.jpg";

  public user: Observable<User>;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    public menuCtrl: MenuController
  ) { 
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    // this.user = this.userService.readUser(this.authService.getId()).valueChanges();
  }

}
