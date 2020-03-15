import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversas',
  templateUrl: './conversas.page.html',
  styleUrls: ['./conversas.page.scss'],
})
export class ConversasPage implements OnInit {
  messages = [
    {
      user: 'Simon',
      createdAt: 1554090856000,
      msg: 'Eai, tudo belezaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaooooooooooooooooi?'
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
  constructor() { }

  ngOnInit() {
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
