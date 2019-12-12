import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordPage } from './password.page';

const routes: Routes = [
  {
    path: '',
    component: PasswordPage
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordPageRoutingModule {}
