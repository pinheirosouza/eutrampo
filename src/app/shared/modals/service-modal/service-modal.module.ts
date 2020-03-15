import { StarRatingModule } from 'ionic4-star-rating';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConversasPage } from './../../../pages/chat/conversas/conversas/conversas.page';

import { IonicModule } from '@ionic/angular';



import { ServiceModalPage } from './service-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    StarRatingModule
  ],
  declarations: [ServiceModalPage],
  // entryComponents:[ServiceModalPage]
  exports:[ServiceModalPage]
})
export class ServiceModalPageModule {}
