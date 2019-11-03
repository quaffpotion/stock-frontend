import { Component } from '@angular/core';

@Component({
  selector: 'app-candlestick-chart',
  templateUrl: './candlestick-chart.component.html',
  styleUrls: ['./candlestick-chart.component.css']
})
export class CandlestickChartComponent {
  data = [10, 20, 50, 40, 80, 20, 10, 90, 20, 70, 20];
}
