import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FurySharedModule } from '@fury/core';
import { FuryCardModule } from '@fury/core';

import { ComingSoonRoutingModule } from './coming-soon-routing.module';
import { ComingSoonComponent } from './coming-soon.component';

@NgModule({
  imports: [
    CommonModule,
    ComingSoonRoutingModule,
    FurySharedModule,
    FuryCardModule
  ],
  declarations: [ComingSoonComponent]
})
export class ComingSoonModule {
}
