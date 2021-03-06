import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { MaterialModule } from '@fury/core/material';
import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor.component';
import { FurySharedModule } from '@fury/core/shared';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    EditorRoutingModule,
    MaterialModule,
    QuillModule.forRoot(),
    FurySharedModule,
    ReactiveFormsModule
  ],
  declarations: [EditorComponent]
})
export class EditorModule {
}
