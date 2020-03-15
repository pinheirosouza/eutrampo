import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddServiceModalPage } from './add-service-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddServiceModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddServiceModalPageRoutingModule {}
