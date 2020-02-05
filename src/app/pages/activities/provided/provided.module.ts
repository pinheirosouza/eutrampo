import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProvidedPageRoutingModule } from './provided-routing.module';

import { ProvidedPage } from './provided.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProvidedPageRoutingModule,
  ],
  declarations: [ProvidedPage],

})
export class ProvidedPageModule {}
