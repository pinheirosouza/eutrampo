import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeusServicosPage } from './meus-servicos.page';

const routes: Routes = [
  {
    path: '',
    component: MeusServicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeusServicosPageRoutingModule {}
