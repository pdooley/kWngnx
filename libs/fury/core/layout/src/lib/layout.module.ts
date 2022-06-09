import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackdropModule } from '@fury/core/backdrop';
import { LoadingIndicatorModule } from '@fury/core/loading-indicator';
import { MediaQueryService } from '../common/mediareplay/media-replay.service';
import { FooterModule } from '@fury/layout/footer';
import { QuickpanelModule } from '@fury/layout/quickpanel';
import { SidenavModule } from '@fury/layout/sidenav';
import { ToolbarModule } from '@fury/layout/toolbar';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LoadingIndicatorModule,

    // Core
    ToolbarModule,
    QuickpanelModule,
    SidenavModule,
    FooterModule,
    BackdropModule
  ],
  declarations: [LayoutComponent],
  providers: [MediaQueryService]
})
export class LayoutModule {
}
