import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '@fury/core';
import { FuryCardModule } from '@fury/core';
import { MaterialModule } from '@fury/core';
import { ScrollbarModule } from '@fury/core';
import { DragAndDropRoutingModule } from './drag-and-drop-routing.module';
import { DragAndDropComponent } from './drag-and-drop.component';
import { FurySharedModule } from '../../../@fury/fury-shared.module';

@NgModule({
  imports: [
    CommonModule,
    DragAndDropRoutingModule,
    FurySharedModule,
    MaterialModule,
    ReactiveFormsModule,
    ScrollbarModule,
    DragDropModule,
    BreadcrumbsModule,
    FuryCardModule
  ],
  declarations: [DragAndDropComponent]
})
export class DragAndDropModule {
}
