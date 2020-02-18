import { ModalController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-service-modal',
  templateUrl: './service-modal.page.html',
  styleUrls: ['./service-modal.page.scss'],
})
export class ServiceModalPage implements OnInit {
  public Obj_worker;
  constructor(
    private modalCtrl: ModalController,
    public actionSheetCtrl: ActionSheetController,
    public navParams: NavParams
    ) { 
      this.Obj_worker = navParams.get("oWorker");
      console.log("Nome="+this.Obj_worker)
    }

  ngOnInit() {
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

}
