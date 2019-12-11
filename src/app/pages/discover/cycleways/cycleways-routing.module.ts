import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CyclewaysPage } from './cycleways.page';

const routes: Routes = [
  {
    path: '',
    component: CyclewaysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CyclewaysPageRoutingModule {}
