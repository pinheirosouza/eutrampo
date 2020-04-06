import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuseumsPage } from './museums.page';

const routes: Routes = [
  {
    path: '',
    component: MuseumsPage
  },  {
    path: 'mapview',
    loadChildren: () => import('./mapview/mapview.module').then( m => m.MapviewPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuseumsPageRoutingModule {}
