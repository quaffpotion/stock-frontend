import { Component, Input } from "@angular/core";
import { Ohlc } from "../ohlc.model";
import { MSFT } from "../msft";
@Component({
  selector: "app-candlestick-chart",
  templateUrl: "./candlestick-chart.component.html",
  styleUrls: ["./candlestick-chart.component.css"]
})
export class CandlestickChartComponent {
  @Input() data: Ohlc[];
  min = Math.min;
  max = Math.max;
  abs = Math.abs;
  // data: number[];
  // data2: {
  //   open: number;
  //   high: number;
  //   low: number;
  //   close: number;
  // }[];
  // stocks: {
  //   open: number;
  //   high: number;
  //   low: number;
  //   close: number;
  // }[];
  data3: Ohlc[];
  constructor() {
    this.data3 = [
      new Ohlc(1, 10, 0, 9),
      new Ohlc(5, 7, 2, 3),
      new Ohlc(2, 4, 1, 3)
    ];
    this.data = [
      new Ohlc(1, 10, 0, 10),
      new Ohlc(5, 7, 2, 9),
      new Ohlc(2, 4, 1, 8)
    ];

    // this.data2 = MSFT;
    // this.data = [...new Array(1000)].map(() => Math.random() * 100);
    // this.stocks = [...new Array(1000)].map(() => ({
    //   open: Math.random() * 100,
    //   high: 50 + Math.random() * 50,
    //   low: 50 - Math.random() * 50,
    //   close: Math.random() * 100
    // }));
  }

  minmax(stock) {
    return (
      Math.max(stock.open, stock.close, stock.low, stock.high) -
      Math.min(stock.open, stock.close, stock.low, stock.high)
    );
  }

  upday(stock) {
    if (stock.close >= stock.open) {
      return "green";
    } else {
      return "red";
    }
  }
}
