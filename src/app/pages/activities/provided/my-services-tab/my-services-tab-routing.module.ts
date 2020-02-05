import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyServicesTabPage } from './my-services-tab.page';

const routes: Routes = [
  {
    path: '',
    component: MyServicesTabPage
  },
  {
    path: 'add-service',
    loadChildren: () => import('./add-service/add-service.module').then( m => m.AddServicePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyServicesTabPageRoutingModule {}
