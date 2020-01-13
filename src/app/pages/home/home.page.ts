import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public recent_services;

  constructor(
    public menuCtrl: MenuController
  ) {
    this.recent_services = [
      { name:'Pedro Souza', 
        pic:"../../../assets/img/pedro.jpg", 
        servicetype:'Pedreiro', 
        provided: 145, 
        price: 45, 
        redirectTo: "#"},

      { name:'Fernando Toledo', 
        pic:"../../../assets/img/fernando.jpeg", 
        servicetype:'Costureiro', 
        provided: 184, 
        price: 20, 
        redirectTo: "#"},

      { name:'Felipe Freitas', 
        pic:"../../../assets/img/felipe.png", 
        servicetype:'Professor Particular', 
        provided: 82, 
        price: 60, 
        redirectTo: "#"},
    ]
  }  

}
