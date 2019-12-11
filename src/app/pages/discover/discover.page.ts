import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  constructor(
    public menuCtrl: MenuController
  ) { 
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
  }

}
