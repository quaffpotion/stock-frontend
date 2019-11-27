import { Component, Input } from "@angular/core";
import { Ohlc } from "../ohlc.model";
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
  data3: Ohlc[];
  constructor() {}

  minmax(stock) {
    return (
      Math.max(stock.open, stock.close, stock.low, stock.high) -
      Math.min(stock.open, stock.close, stock.low, stock.high)
    );
  }
  getViewBox(data: Ohlc[]) {
    const viewBox = `0 -10 ${data.length} 10`;
    return viewBox;
  }

  upday(stock) {
    if (stock.close >= stock.open) {
      return "green";
    } else {
      return "red";
    }
  }
}
