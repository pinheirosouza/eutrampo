import { HiredService } from './../../../pages/activities/hired/hired.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, ActionSheetController } from '@ionic/angular';



@Component({
  selector: 'app-hired-modal',
  templateUrl: './hired-modal.page.html',
  styleUrls: ['./hired-modal.page.scss'],
})
export class HiredModalPage implements OnInit {
  rating=0
  hired: any;
  constructor(
    private modalCtrl: ModalController,
    public actionSheetCtrl: ActionSheetController,
    private hiredService: HiredService
    ) { }

  ngOnInit() {
    this.hired = this.hiredService.getHired()
    console.log(this.hired)
  }

  modalClose(){
    this.modalCtrl.dismiss();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Selecione uma opção de contato',
      buttons: [{
        text: 'WhatsApp',
        icon: 'logo-whatsapp',
        handler: () => {
          console.log('wpp clicked');
        }
      }, {
        text: 'Facebook Mensager',
        icon: 'logo-facebook',
        handler: () => {
          console.log('fb clicked');
        }
      }, {
        text: 'Celular',
        icon: 'call',
        handler: () => {
          console.log('phone clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  logRatingChange(rating){
    console.log("changed rating: ",rating);
    this.rating = rating
    
}
  async sendRating(hired){
    hired.rated=true
    let sum = 0
    hired.ratingList.push(this.rating)
    for( let i=0; i < hired.ratingList.length; i++){
      sum = sum+hired.ratingList[i];
    }
    hired.total = (sum/hired.ratingList.length).toFixed(1)
    
    console.log(sum)
  }

}
