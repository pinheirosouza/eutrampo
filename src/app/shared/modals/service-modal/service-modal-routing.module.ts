import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceModalPage } from './service-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceModalPageRoutingModule {}
