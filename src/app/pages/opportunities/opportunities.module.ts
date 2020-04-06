import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpportunitiesPageRoutingModule } from './opportunities-routing.module';

import { OpportunitiesPage } from './opportunities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpportunitiesPageRoutingModule
  ],
  declarations: [OpportunitiesPage]
})
export class OpportunitiesPageModule {}
