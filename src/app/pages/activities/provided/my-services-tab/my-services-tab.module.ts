import { UpdateWorkerComponent } from './../../../../shared/modals/update-worker/update-worker.component';
import { AddWorkerComponent } from 'src/app/shared/modals/add-worker/add-worker.component';
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
  declarations: [MyServicesTabPage, AddWorkerComponent, UpdateWorkerComponent],
  entryComponents: [AddWorkerComponent, UpdateWorkerComponent]

})
export class MyServicesTabPageModule {}
