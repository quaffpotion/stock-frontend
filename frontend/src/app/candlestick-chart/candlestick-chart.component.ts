import { Component } from '@angular/core';

@Component({
  selector: 'app-candlestick-chart',
  templateUrl: './candlestick-chart.component.html',
  styleUrls: ['./candlestick-chart.component.css']
})
export class CandlestickChartComponent {
  data: number[];
  constructor() {
    this.data = [...new Array(1000)].map(() => Math.random() * 100);
    console.log(this.data);
  }
}
