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

import { BreadcrumbsModule } from '@fury/core/breadcrumbs';
import { PageLayoutModule } from '@fury/core/page-layout';
import { PageModule } from '@fury/core/page';
import { TitleModule } from '@fury/core/title';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [

    // Material
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
    ScrollingModule,

    BreadcrumbsModule,
    PageLayoutModule,
    PageModule,
    RouterModule,
    TitleModule,

  ]
})
export class FurySharedModule {
}
