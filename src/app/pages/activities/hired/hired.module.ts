import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StarRatingModule } from 'ionic4-star-rating';
import { HiredPageRoutingModule } from './hired-routing.module';

import { HiredPage } from './hired.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HiredPageRoutingModule,
    StarRatingModule
  ],
  declarations: [HiredPage],
  entryComponents: []
})
export class HiredPageModule {}
