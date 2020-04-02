import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscoverPage } from './discover.page';

const routes: Routes = [
  {
    path: '',
    component: DiscoverPage
  },
  {
    path: 'bus',
    loadChildren: () => import('./bus/bus.module').then( m => m.BusPageModule)
  },
  {
    path: 'cycleways',
    loadChildren: () => import('./cycleways/cycleways.module').then( m => m.CyclewaysPageModule)
  },
  // {
  //   path: 'museums',
  //   loadChildren: () => import('./museums/museums.module').then( m => m.MuseumsPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscoverPageRoutingModule {}
