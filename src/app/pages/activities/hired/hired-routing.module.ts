import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HiredPage } from './hired.page';

const routes: Routes = [
  {
    path: '',
    component: HiredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HiredPageRoutingModule {}
