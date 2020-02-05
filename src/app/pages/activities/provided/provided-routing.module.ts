import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProvidedPage } from './provided.page';

const routes: Routes = [
  {
    path: '',
    component: ProvidedPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./my-services-tab/my-services-tab.module').then( m => m.MyServicesTabPageModule)
      },
      {
        path: 'my-services-tab',
        loadChildren: () => import('./my-services-tab/my-services-tab.module').then( m => m.MyServicesTabPageModule)
      },
      {
        path: 'history-services-tab',
        loadChildren: () => import('./history-services-tab/history-services-tab.module').then( m => m.HistoryServicesTabPageModule)
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProvidedPageRoutingModule {}
