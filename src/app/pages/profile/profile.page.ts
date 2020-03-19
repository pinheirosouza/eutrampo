import { DevelopingService } from './../../shared/services/developing/developing.service';
import { AuthService } from "./../../shared/services/auth/auth.service";
import { User } from "./../../shared/interfaces/user";
import { Observable } from "rxjs";

import { Component, OnInit } from "@angular/core";
import { MenuController } from "@ionic/angular";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-user",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"]
})
export class ProfilePage implements OnInit {
  private foto_perfil = "../../../assets/img/perfil.jpg";
  userData: User = {};
  userCounter: User = {};

  constructor(
    private authService: AuthService,
    public menuCtrl: MenuController,
    public alertCtrl: AlertController,
    public devService: DevelopingService
  ) {
    this.menuCtrl.enable(false);
    console.log(this.authService.user._id);
    this.authService.getUserData(this.authService.user._id).subscribe(res => {
      this.userData = res;
      console.log(this.userData);
    });
    this.authService
      .getUserCounter(this.authService.user._id)
      .subscribe(res => {
        this.userCounter = res;
        console.log(this.userCounter);
      });
  }

  ngOnInit() {}

  developing() {
    this.devService.developing();
  }
}
