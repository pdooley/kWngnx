import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '@fury/core/breadcrumbs';
import { FuryCardModule } from '@fury/core/card';
import { HighlightModule } from '@fury/core/highlightjs';
import { MaterialModule } from '@fury/core/material';
import { FormElementsRoutingModule } from './form-elements-routing.module';
import { FormElementsComponent } from './form-elements.component';
import { FurySharedModule } from '@fury/core/shared';

@NgModule({
  imports: [
    CommonModule,
    FormElementsRoutingModule,
    MaterialModule,
    FurySharedModule,
    ReactiveFormsModule,

    // Core
    HighlightModule,
    FuryCardModule,
    BreadcrumbsModule
  ],
  declarations: [FormElementsComponent]
})
export class FormElementsModule {
}
