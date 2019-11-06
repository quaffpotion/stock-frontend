import { Component } from '@angular/core';
import { MSFT } from '../msft';
@Component({
  selector: 'app-candlestick-chart',
  templateUrl: './candlestick-chart.component.html',
  styleUrls: ['./candlestick-chart.component.css']
})
export class CandlestickChartComponent {
  min = Math.min;
  max = Math.max;
  abs = Math.abs;
  data: number[];
  data2: {
    open: number;
    high: number;
    low: number;
    close: number;
  }[];
  stocks: {
    open: number;
    high: number;
    low: number;
    close: number;
  }[];
  constructor() {
    this.data2 = MSFT;
    this.data = [...new Array(1000)].map(() => Math.random() * 100);
    this.stocks = [...new Array(1000)].map(() => ({
      open: Math.random() * 100,
      high: 50 + Math.random() * 50,
      low: 50 - Math.random() * 50,
      close: Math.random() * 100
    }));
  }

  minmax(stock) {
    return (
      Math.max(stock.open, stock.close, stock.low, stock.high) -
      Math.min(stock.open, stock.close, stock.low, stock.high)
    );
  }

  upday(stock) {
    if (stock.close >= stock.open) {
      return 'green';
    } else {
      return 'red';
    }
  }
}
