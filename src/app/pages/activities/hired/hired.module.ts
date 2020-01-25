import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StarRatingModule } from 'ionic4-star-rating';
import { HiredPageRoutingModule } from './hired-routing.module';

import { HiredPage } from './hired.page';
import { HiredModalPage } from 'src/app/shared/modals/hired-modal/hired-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HiredPageRoutingModule,
    StarRatingModule
  ],
  declarations: [HiredPage, HiredModalPage],
  entryComponents: [HiredModalPage]
})
export class HiredPageModule {}
