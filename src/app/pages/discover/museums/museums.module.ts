import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuseumsPageRoutingModule } from './museums-routing.module';

import { MuseumsPage } from './museums.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuseumsPageRoutingModule
  ],
  declarations: [MuseumsPage]
})
export class MuseumsPageModule {}
