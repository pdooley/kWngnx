import { ChartWidgetOptions } from '@fury/core/chart-widget';

export class LineChartWidgetOptions extends ChartWidgetOptions {
  gradientFill?: {
    from: string;
    to: string;
  };
}
