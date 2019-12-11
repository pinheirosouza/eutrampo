import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProvidedPage } from './provided.page';

const routes: Routes = [
  {
    path: '',
    component: ProvidedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProvidedPageRoutingModule {}
