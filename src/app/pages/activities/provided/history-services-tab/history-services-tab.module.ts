import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryServicesTabPageRoutingModule } from './history-services-tab-routing.module';

import { HistoryServicesTabPage } from './history-services-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryServicesTabPageRoutingModule
  ],
  declarations: [HistoryServicesTabPage]
})
export class HistoryServicesTabPageModule {}
