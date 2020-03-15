import { ModalController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ConversasPage } from 'src/app/pages/chat/conversas/conversas/conversas.page';

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

  async goToChat(){
    console.log("Worker4= "+this.Obj_worker)
    // const modal = await this.modalCtrl.create(
      
    //   {
    //   component:ConversasPage,
    //   componentProps:{oWorker: this.Obj_worker}
    // }).then(conversa=>{
    //   conversa.present();
    // })
      
  }
}

