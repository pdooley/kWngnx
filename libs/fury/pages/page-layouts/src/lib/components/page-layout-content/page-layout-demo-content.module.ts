import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutDemoContentComponent } from './page-layout-demo-content.component';
import { FurySharedModule } from '@fury/core/shared';

@NgModule({
  declarations: [PageLayoutDemoContentComponent],
  imports: [
    CommonModule,
    FurySharedModule
  ],
  exports: [PageLayoutDemoContentComponent]
})
export class PageLayoutDemoContentModule {
}
