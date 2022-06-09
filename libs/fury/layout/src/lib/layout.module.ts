import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ConfigPanelModule } from './config-panel/config-panel.module';
import { FooterModule } from './footer/footer.module';
import { LayoutComponent } from './layout.component';
import { NavigationModule } from './navigation/navigation.module';
import { QuickpanelModule } from './quickpanel/quickpanel.module';
import { SidebarModule } from './sidebar';
import { SidenavModule } from './sidenav/sidenav.module';
import { ToolbarModule } from './toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    // Core
    ToolbarModule,
    QuickpanelModule,
    SidenavModule,
    FooterModule,
    ConfigPanelModule,
    NavigationModule,
    SidebarModule
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule {
}
