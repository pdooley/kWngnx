import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { BreadcrumbsModule } from './shared/breadcrumbs/breadcrumbs.module';
import { PageLayoutModule } from './shared/page-layout/page-layout.module';
import { PageModule } from './shared/page/page.module';
import { TitleModule } from './shared/title/title.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    BreadcrumbsModule,
    TitleModule,
    PageModule,
    RouterModule,
    PageLayoutModule,

    // External
    FlexLayoutModule,
    FontAwesomeModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatRadioModule,
    MatRippleModule,
    MatSlideToggleModule,
    ScrollingModule
  ]
})
export class FurySharedModule {
}
