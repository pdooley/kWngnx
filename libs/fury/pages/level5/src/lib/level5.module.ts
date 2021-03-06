import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BreadcrumbsModule } from '@fury/core/breadcrumbs';
import { FuryCardModule } from '@fury/core/card';
import { Level5RoutingModule } from './level5-routing.module';
import { Level5Component } from './level5.component';

@NgModule({
  imports: [
    CommonModule,
    Level5RoutingModule,
    FuryCardModule,
    BreadcrumbsModule
  ],
  declarations: [Level5Component]
})
export class Level5Module {
}
