import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyServicesTabPageRoutingModule } from './my-services-tab-routing.module';

import { MyServicesTabPage } from './my-services-tab.page';
import { AddServiceModalPage } from 'src/app/shared/modals/add-service-modal/add-service-modal.page';
import { AddServiceModalPageModule } from 'src/app/shared/modals/add-service-modal/add-service-modal.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyServicesTabPageRoutingModule,
    AddServiceModalPageModule
  ],
  declarations: [MyServicesTabPage],
  entryComponents: [AddServiceModalPage]

})
export class MyServicesTabPageModule {}
