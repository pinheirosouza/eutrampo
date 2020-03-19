import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  messages = [
    {
      user: 'Simon',
      createdAt: 1554090856000,
      msg: 'Eai, tudo belezaaaaaaaaaaaaaaaaaaaa?'
    },
    {
      user: 'Felipe',
      createdAt: 1554090956000,
      msg: 'Tudo em cima, e contigo??'
    },
    {
      user: 'Simon',
      createdAt: 1554091056000,
      msg: 'TUdo na paz'
    },
  ];
  currentUser= 'Simon';
  newMsg='';

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  modalClose() {
    this.modalCtrl.dismiss();
  }

  sendMessage(){
    this.messages.push({
      user: 'Simon',
      createdAt: new Date().getTime(),
      msg: this.newMsg
    });
    this.newMsg ='';
  }

}
