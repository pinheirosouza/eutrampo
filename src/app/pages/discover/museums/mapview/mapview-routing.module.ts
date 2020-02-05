import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapviewPage } from './mapview.page';

const routes: Routes = [
  {
    path: '',
    component: MapviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapviewPageRoutingModule {}
