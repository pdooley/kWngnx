import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';

import { FuryCardModule } from '@fury/core/card';
import { LoadingOverlayModule } from '@fury/core/loading-overlay';
import { MaterialModule } from '@fury/core/material';
import { DonutChartWidgetComponent } from './donut-chart-widget.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,

    // Core
    FuryCardModule,
    LoadingOverlayModule,
    ChartsModule,
  ],
  declarations: [DonutChartWidgetComponent],
  exports: [DonutChartWidgetComponent]
})
export class DonutChartWidgetModule {
}
