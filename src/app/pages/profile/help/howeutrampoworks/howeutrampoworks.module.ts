import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoweutrampoworksPageRoutingModule } from './howeutrampoworks-routing.module';

import { HoweutrampoworksPage } from './howeutrampoworks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoweutrampoworksPageRoutingModule
  ],
  declarations: [HoweutrampoworksPage]
})
export class HoweutrampoworksPageModule {}
