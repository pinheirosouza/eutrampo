import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryServicesTabPage } from './history-services-tab.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryServicesTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryServicesTabPageRoutingModule {}
