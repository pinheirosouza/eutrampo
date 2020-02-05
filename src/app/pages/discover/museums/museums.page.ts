import { Component, ViewEncapsulation} from '@angular/core';
import { MuseumsService } from './museums.service';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-museums',
  templateUrl: 'museums.page.html',
  styleUrls: ['museums.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MuseumsPage{
  museumData = [];
  constructor(
    private alertCtrl : AlertController,
    private router: Router,
    private museumsService: MuseumsService,
  ) { fetch('./assets/museums.json').then(res => res.json())
      .then(data => {
        this.museumData = data.museums;
        this.museumsService.setMuseums(this.museumData);
      })
    }


  async showMuseum(museum){
    const alert = await this.alertCtrl.create({
      header:'Descrição',
      cssClass:'fabStyle',
      message: museum.desc,
      buttons:['Sair']
    });
    await alert.present()
    
  }
  async showAddress(museum){
    const alert = await this.alertCtrl.create({
      header:'Endereço',
      cssClass:'fabStyle',
      message: museum.address,
      buttons:['Sair']
    });
    await alert.present()
    
  }
}
