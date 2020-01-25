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
  hiredData=[]
  rating= 0
  hired: any;
  constructor(private hiredService: HiredService, private modalCtrl: ModalController)
  { fetch('./assets/hiredList.json').then(res => res.json())
  .then(data => {
    this.hiredData = data.hired;
    this.hiredService.setHiredList(this.hiredData);
  })}

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
