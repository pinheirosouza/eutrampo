import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  private foto_perfil = "../../../assets/img/perfil.jpg";

  constructor(
    public menuCtrl: MenuController
  ) { 
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
  }

}
