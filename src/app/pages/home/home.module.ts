import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { AuthService } from 'src/app/auth/services/auth.service';
import { StarRatingModule } from 'ionic4-star-rating';

@NgModule({
  imports: [
    FormsModule,
    StarRatingModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
