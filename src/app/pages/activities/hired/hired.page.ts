import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { HiredService } from './hired.service';
import { HiredModalPage } from 'src/app/shared/modals/hired-modal/hired-modal.page';


@Component({
  selector: 'app-hired',
  templateUrl: './hired.page.html',
  styleUrls: ['./hired.page.scss'],
})
export class HiredPage implements OnInit {

  hiredList: any;
  hired: any;
  
  constructor(private hiredService: HiredService, private modalCtrl: ModalController)
  {
    {
      this.hiredList = [
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

  ngOnInit(){
  }

  async showModal(hired){
    this.hired = hired;
    this.hiredService.setHired(this.hired)
    const modal = await this.modalCtrl.create({
      component:HiredModalPage
    });
    
    modal.present();
      
  }
}
