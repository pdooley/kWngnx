import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankRoutingModule } from './blank-routing.module';
import { BlankComponent } from './blank.component';
import { FurySharedModule } from '@fury/core/shared'

@NgModule({
  imports: [
    CommonModule,
    BlankRoutingModule,
    FurySharedModule
  ],
  declarations: [BlankComponent]
})
export class BlankModule {
}
