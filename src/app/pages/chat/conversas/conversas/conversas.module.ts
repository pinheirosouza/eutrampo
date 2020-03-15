import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConversasPageRoutingModule } from './conversas-routing.module';
import {AutosizeModule} from 'ngx-autosize';

import { ConversasPage } from './conversas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutosizeModule,
    ConversasPageRoutingModule
  ],
  declarations: [ConversasPage]
})
export class ConversasPageModule {}
