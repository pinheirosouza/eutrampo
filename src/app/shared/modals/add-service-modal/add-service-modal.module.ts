import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddServiceModalPageRoutingModule } from './add-service-modal-routing.module';

import { AddServiceModalPage } from './add-service-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddServiceModalPageRoutingModule
  ],
  declarations: [AddServiceModalPage]
})
export class AddServiceModalPageModule {}
