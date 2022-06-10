import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollbarModule } from '@fury/core/scrollbar';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';

@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule,
    ReactiveFormsModule,

    // Core
    ScrollbarModule,
  ],
  declarations: [ChatComponent]
})
export class ChatModule {
}
