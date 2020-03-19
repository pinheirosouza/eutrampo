import { ChatComponent } from '../../shared/modals/chat/chat.component';
import { ConversationsPageRoutingModule } from './conversations-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConversationsPage } from './conversations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConversationsPageRoutingModule
  ],
  declarations: [ConversationsPage, ChatComponent],
  entryComponents: [ChatComponent]
})
export class ConversationsPageModule {}
