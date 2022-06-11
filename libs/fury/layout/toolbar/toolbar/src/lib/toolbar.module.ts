import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FuryCardModule } from '@fury/core/card';
import { ClickOutsideModule } from '@fury/core/click-outside';
import { ScrollbarModule } from '@fury/core/scrollbar';
import { ToolbarComponent } from './toolbar.component';
import { ToolbarFullscreenToggleComponent } from '@fury/layout/toolbar-fullscreen-toggle';
import { ToolbarNotificationsComponent } from '@fury/layout/toolbar-notifications';
import { ToolbarQuickpanelToggleComponent } from '@fury/layout/toolbar-quickpanel-toggle';
import { ToolbarSearchBarComponent } from '@fury/layout/toolbar-search-bar';
import { ToolbarSearchComponent } from '@fury/layout/toolbar-search';
import { ToolbarSidenavMobileToggleComponent } from '@fury/layout/toolbar-sidenav-mobile-toggle';
import { ToolbarUserComponent } from '@fury/layout/toolbar-user';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    ScrollbarModule,
    FormsModule,
    ClickOutsideModule,
    FuryCardModule,
  ],
  declarations: [
    ToolbarComponent,
    ToolbarUserComponent,
    ToolbarNotificationsComponent,
    ToolbarSearchComponent,
    ToolbarSearchBarComponent,
    ToolbarQuickpanelToggleComponent,
    ToolbarFullscreenToggleComponent,
    ToolbarSidenavMobileToggleComponent,
    ToolbarUserComponent
  ],
  exports: [ToolbarComponent]
})
export class ToolbarModule {
}
