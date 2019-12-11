import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuseumsPage } from './museums.page';

const routes: Routes = [
  {
    path: '',
    component: MuseumsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuseumsPageRoutingModule {}
