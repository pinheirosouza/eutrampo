import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeusServicosPageRoutingModule } from './meus-servicos-routing.module';

import { MeusServicosPage } from './meus-servicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeusServicosPageRoutingModule
  ],
  declarations: [MeusServicosPage]
})
export class MeusServicosPageModule {}
