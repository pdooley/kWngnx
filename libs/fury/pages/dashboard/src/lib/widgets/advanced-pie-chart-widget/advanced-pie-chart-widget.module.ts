import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';

import { FuryCardModule } from '@fury/core/card';
import { LoadingOverlayModule } from '@fury/core/loading-overlay';
import { MaterialModule } from '@fury/core/material';
import { ScrollbarModule } from '@fury/core/scrollbar';

import { AdvancedPieChartWidgetComponent } from './advanced-pie-chart-widget.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,

    // Core
    FuryCardModule,
    LoadingOverlayModule,
    ScrollbarModule,
    ChartsModule
  ],
  declarations: [AdvancedPieChartWidgetComponent],
  exports: [AdvancedPieChartWidgetComponent]
})
export class AdvancedPieChartWidgetModule {
}
