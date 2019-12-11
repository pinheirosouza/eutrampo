import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HiredPageRoutingModule } from './hired-routing.module';

import { HiredPage } from './hired.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HiredPageRoutingModule
  ],
  declarations: [HiredPage]
})
export class HiredPageModule {}
