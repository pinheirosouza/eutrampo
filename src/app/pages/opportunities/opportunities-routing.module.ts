import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpportunitiesPage } from './opportunities.page';

const routes: Routes = [
  {
    path: '',
    component: OpportunitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpportunitiesPageRoutingModule {}
