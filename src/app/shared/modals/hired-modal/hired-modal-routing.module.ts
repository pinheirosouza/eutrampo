import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HiredModalPage } from './hired-modal.page';

const routes: Routes = [
  {
    path: '',
    component: HiredModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HiredModalPageRoutingModule {}
