import { Component, AfterViewInit, ElementRef, ViewChild, Input } from '@angular/core';
import {
  createChart,
  IChartApi,
  ISeriesApi,
  BarData,
  LineData
} from 'lightweight-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('chartContainer', { static: false }) chartContainer!: ElementRef;

  @Input() chartType: 'line' | 'bar' = 'line';
  @Input() chartData: (LineData | BarData)[] = [];
  @Input() chartOptions: any = {};

  private chart!: IChartApi;
  private series!: ISeriesApi<'Line'> | ISeriesApi<'Bar'>;

  constructor() {}

  ngAfterViewInit(): void {
    // Crear el gráfico
    this.chart = createChart(this.chartContainer.nativeElement, {
      width: this.chartContainer.nativeElement.clientWidth,
      height: 300,
      ...this.chartOptions,
    });

    // Configurar la serie según el tipo
    if (this.chartType === 'line') {
      this.series = this.chart.addLineSeries();
    } else if (this.chartType === 'bar') {
      this.series = this.chart.addBarSeries();
    }

    // Agregar los datos
    this.series.setData(this.chartData);
  }
}
