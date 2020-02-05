import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  constructor(
    private callNumber: CallNumber,
    private emailComposer: EmailComposer
  ) { }

  ngOnInit() {
  }
  
  call() {
    this.callNumber.callNumber("21990328060", true)
      .then(res => console.log('Realizando chamada!', res))
      .catch(err => console.log('Erro ao realizar chamada.', err));
  }

  mail() {
    let email = {
      to: 'eutrampo@furg.br',
      subject: 'Ajuda',
      isHtml: true
    }
    
    this.emailComposer.open(email);
  }
}
