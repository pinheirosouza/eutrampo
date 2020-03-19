import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { DevelopingService } from './../../services/developing/developing.service';
import { ChatComponent } from "../chat/chat.component";
import {
  ModalController,
  ActionSheetController,
  NavParams
} from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-service",
  templateUrl: "./service.component.html",
  styleUrls: ["./service.component.scss"]
})
export class ServiceComponent implements OnInit {
  public Obj_worker;

  constructor(
    private modalCtrl: ModalController,
    public actionSheetCtrl: ActionSheetController,
    public navParams: NavParams,
    private devService: DevelopingService,
    private callNumber: CallNumber,
    private emailComposer: EmailComposer,
  ) {
    this.Obj_worker = navParams.get("oWorker");
    console.log("Nome=" + this.Obj_worker);
  }

  ngOnInit() {}

  modalClose() {
    this.modalCtrl.dismiss();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: "Selecione uma opção de contato",
      buttons: [
        {
          text: "Chat",
          icon: "chatboxes"
        },
        {
          text: "Email",
          icon: "mail-unread"
        },
        // {
        //   text: "Facebook Mensager",
        //   icon: "logo-facebook"
        // },
        {
          text: "Celular",
          icon: "call"
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel"
        }
      ]
    });
    await actionSheet.present();
  }

  openChat() {}

  openEmail() {
    let email = {
      to: this.Obj_worker.user[0].email,
      subject: 'Solicitação de serviço - EuTrampo',
      isHtml: true
    }
    
    this.emailComposer.open(email);
  }

  openCall(){
      this.callNumber.callNumber(this.Obj_worker.user[0].phone, true)
        .then(res => console.log('Realizando chamada!', res))
        .catch(err => console.log('Erro ao realizar chamada.', err));
  }

  developing() {
    this.devService.developing();
  }
}