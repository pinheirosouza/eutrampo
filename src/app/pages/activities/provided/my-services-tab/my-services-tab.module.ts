import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyServicesTabPageRoutingModule } from './my-services-tab-routing.module';

import { MyServicesTabPage } from './my-services-tab.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyServicesTabPageRoutingModule,
  ],
  declarations: [MyServicesTabPage],

})
export class MyServicesTabPageModule {}
