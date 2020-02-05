import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePicturePage } from './profile-picture.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePicturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePicturePageRoutingModule {}
