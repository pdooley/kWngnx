import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FuryCardModule } from '@fury/core/card';
import { ClickOutsideModule } from '@fury/core/click-outside';
import { ScrollbarModule } from '@fury/core/scrollbar';
import { ToolbarFullscreenTogglerModule } from '@fury/layout/toolbar-fullscreen-toggle';
import { ToolbarNotificationsModule } from '@fury/layout/toolbar-notifications';
import { ToolbarQuickpanelTogglerModule } from '@fury/layout/toolbar-quickpanel-toggle';
import { ToolbarSearchBarrModule } from '@fury/layout/toolbar-search-bar';
import { ToolbarSearchModule } from '@fury/layout/toolbar-search';
import { ToolbarSidenavMobileToggleModule } from '@fury/layout/toolbar-sidenav-mobile-toggle';
import { ToolbarUserModule } from '@fury/layout/toolbar-user';

import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    ScrollbarModule,
    FormsModule,
    ClickOutsideModule,
    FuryCardModule,
    ToolbarUserModule
  ],
  declarations: [
    ToolbarComponent,
    ToolbarUserComponent,
    ToolbarNotificationsComponent,
    ToolbarSearchComponent,
    ToolbarSearchBarComponent,
    ToolbarQuickpanelToggleComponent,
    ToolbarFullscreenToggleComponent,
    ToolbarSidenavMobileToggleComponent
  ],
  exports: [ToolbarComponent]
})
export class ToolbarModule {
}
