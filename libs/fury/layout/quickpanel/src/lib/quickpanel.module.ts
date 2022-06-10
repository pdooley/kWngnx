import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ScrollbarModule } from '@fury/core/scrollbar';

import { QuickpanelComponent } from './quickpanel.component';

@NgModule({
  imports: [
    CommonModule,
    ScrollbarModule
  ],
  declarations: [QuickpanelComponent],
  exports: [QuickpanelComponent]
})
export class QuickpanelModule {
}
