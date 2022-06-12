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
"@nestjs/common": "^8.0.0",
"@nestjs/core": "^7.5.5",
"@nestjs/platform-express": "^7.5.5",
"@nrwl/angular": "14.1.9",
"@types/jest": "27.4.1",

"@types/lodash-es": "~4.17.4",
"@types/node": "~14.17.15",
"@typescript-eslint/eslint-plugin": "~5.18.0",
"@typescript-eslint/parser": "~5.18.0",
"cypress": "^9.1.0",
"eslint": "~8.12.0",
"eslint-config-prettier": "8.1.0",
"eslint-plugin-cypress": "^2.10.3",
"jest": "27.5.1",
"jest-preset-angular": "11.1.1",
"nx": "14.1.9",
"prettier": "^2.5.1",
"ts-jest": "27.1.4",

