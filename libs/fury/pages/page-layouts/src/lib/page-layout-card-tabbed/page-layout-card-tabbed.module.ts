import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutCardTabbedRoutingModule } from './page-layout-card-tabbed-routing.module';
import { PageLayoutCardTabbedComponent } from './page-layout-card-tabbed.component';
import { FurySharedModule } from '@fury/core/shared';
import { FuryCardModule } from '@fury/core/card';
import { PageLayoutDemoContentModule } from '../components/page-layout-content/page-layout-demo-content.module';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [PageLayoutCardTabbedComponent],
  imports: [
    CommonModule,
    PageLayoutCardTabbedRoutingModule,
    FurySharedModule,
    FuryCardModule,
    PageLayoutDemoContentModule,
    MatTabsModule
  ]
})
export class PageLayoutCardTabbedModule {
}
