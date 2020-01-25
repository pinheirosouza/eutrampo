import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingModule } from 'ionic4-star-rating';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HiredModalPageRoutingModule } from './hired-modal-routing.module';

import { HiredModalPage } from './hired-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HiredModalPageRoutingModule,
    StarRatingModule
  ],
  declarations: [HiredModalPage]
})
export class HiredModalPageModule {}
