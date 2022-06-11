import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '@fury/core/breadcrumbs';
import { FuryCardModule } from '@fury/core/card';
import { MaterialModule } from '@fury/core/material';
import { IconsRoutingModule } from './icons-routing.module';
import { IconsComponent } from './icons.component';
import { ScrollbarModule } from '@fury/core/scrollbar';

@NgModule({
  imports: [
    CommonModule,
    IconsRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    BreadcrumbsModule,
    FuryCardModule,
    ScrollbarModule
  ],
  declarations: [IconsComponent]
})
export class IconsModule {
}
