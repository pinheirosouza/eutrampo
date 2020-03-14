import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyServicesTabPage } from './my-services-tab.page';

const routes: Routes = [
  {
    path: '',
    component: MyServicesTabPage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyServicesTabPageRoutingModule {}
