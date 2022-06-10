import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

import { InboxComponent } from './inbox.component';
import { InboxComposeComponent } from './inbox-compose/inbox-compose.component';
import { InboxMailComponent } from './inbox-mail/inbox-mail.component';
import { InboxMailConfirmDialogComponent } from './inbox-mail-confirm-dialog/inbox-mail-confirm-dialog.component';
import { InboxMailLabelListComponent } from './inbox-mail-label-list/inbox-mail-label-list.component';
import { InboxMailLabelComponent } from './inbox-mail-label/inbox-mail-label.component';
import { InboxMailListComponent } from './inbox-mail-list/inbox-mail-list.component';
import { InboxMailStarComponent } from './inbox-mail-star/inbox-mail-star.component';
import { InboxNavigationComponent } from './inbox-navigation/inbox-navigation.component';
import { InboxRoutingModule } from './inbox-routing.module';
import { InboxService } from './inbox.service';
import { ScrollbarModule } from '@fury/core/scrollbar';

@NgModule({
  imports: [
    CommonModule,
    InboxRoutingModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    ScrollbarModule,
    ScrollingModule
  ],
  declarations: [InboxComponent, InboxNavigationComponent, InboxMailListComponent, InboxMailComponent, InboxMailLabelComponent, InboxMailStarComponent, InboxMailLabelListComponent, InboxMailConfirmDialogComponent, InboxComposeComponent],
  entryComponents: [InboxMailConfirmDialogComponent, InboxComposeComponent],
  providers: [InboxService]
})
export class InboxModule {
}
