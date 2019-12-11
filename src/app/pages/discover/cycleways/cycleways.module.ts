import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CyclewaysPageRoutingModule } from './cycleways-routing.module';

import { CyclewaysPage } from './cycleways.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CyclewaysPageRoutingModule
  ],
  declarations: [CyclewaysPage]
})
export class CyclewaysPageModule {}
