import { StarRatingModule } from 'ionic4-star-rating';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceModalPageRoutingModule } from './service-modal-routing.module';

import { ServiceModalPage } from './service-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceModalPageRoutingModule,
    FormsModule,
    StarRatingModule
  ],
  declarations: [ServiceModalPage],
})
export class ServiceModalPageModule {}
