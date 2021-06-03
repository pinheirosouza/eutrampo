import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.scss'],
})


export class CoronaComponent implements OnInit {

    constructor(
        private modalCtrl: ModalController
    ){
    }

    ngOnInit(){}
    modalClose() {
        this.modalCtrl.dismiss();
        
      }
}