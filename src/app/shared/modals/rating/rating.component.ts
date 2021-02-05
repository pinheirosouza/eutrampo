import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})


export class RatingComponent implements OnInit {

    constructor(
        private modalCtrl: ModalController
    ){
    }

    ngOnInit(){}
    modalClose() {
        this.modalCtrl.dismiss();
      }
}