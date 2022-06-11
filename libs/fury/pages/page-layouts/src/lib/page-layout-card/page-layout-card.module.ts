import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutCardRoutingModule } from './page-layout-card-routing.module';
import { PageLayoutCardComponent } from './page-layout-card.component';
import { FurySharedModule } from '@fury/core/shared';
import { PageLayoutDemoContentModule } from '../components/page-layout-content/page-layout-demo-content.module';
import { FuryCardModule } from '@fury/core/card';

@NgModule({
  declarations: [PageLayoutCardComponent],
  imports: [
    CommonModule,
    PageLayoutCardRoutingModule,
    FurySharedModule,
    FuryCardModule,
    PageLayoutDemoContentModule
  ]
})
export class PageLayoutCardModule {
}
