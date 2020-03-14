import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AddServiceModalPage } from 'src/app/shared/modals/add-service-modal/add-service-modal.page';

@Component({
  selector: 'app-my-services-tab',
  templateUrl: './my-services-tab.page.html',
  styleUrls: ['./my-services-tab.page.scss'],
})
export class MyServicesTabPage implements OnInit {

  public recent_services;
  

  myList: any;

  constructor(private modalCtrl: ModalController) {
    {
      this.myList = [
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

  ngOnInit() {
  }
  async cadastrarServico(){
 
    const modal = await this.modalCtrl.create({
      component:AddServiceModalPage
    });
    
    modal.present();
      
  
}

}
