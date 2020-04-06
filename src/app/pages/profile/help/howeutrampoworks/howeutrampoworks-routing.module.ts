import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoweutrampoworksPage } from './howeutrampoworks.page';

const routes: Routes = [
  {
    path: '',
    component: HoweutrampoworksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoweutrampoworksPageRoutingModule {}
