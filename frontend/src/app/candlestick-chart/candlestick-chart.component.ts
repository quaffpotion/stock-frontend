import { Component, Input } from "@angular/core";
import { Ohlc } from "../ohlc.model";
@Component({
  selector: "app-candlestick-chart",
  templateUrl: "./candlestick-chart.component.html",
  styleUrls: ["./candlestick-chart.component.css"]
})
export class CandlestickChartComponent {
  @Input() data: Ohlc[];
  @Input() coordinateheight = 150; // Default value so it doesn't throw an error
  min = Math.min;// We can call `min` from the html template but we cannot call `Math.min` directly
  max = Math.max;
  abs = Math.abs;
  data3: Ohlc[];
  constructor() {}

  minmax(stock) {
    return (
      this.max(stock.open, stock.close, stock.low, stock.high) -
      this.min(stock.open, stock.close, stock.low, stock.high)
    );
  }
  getViewBox(data: Ohlc[]) {
    const max = Math.max(...data.map(x => x.high));
    const viewBox = `0 -${max} ${data.length} ${max}`;
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
