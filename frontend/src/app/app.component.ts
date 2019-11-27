import { Component } from "@angular/core";
import { MSFT } from "./msft";
import { Stock } from "./stock.model";
import { MOCKDATA } from "./mockdata";
import { Observable } from "rxjs";
import { Ohlc } from "./ohlc.model";

interface DataModel {
  letter: string;
  frequency: number;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  data: Observable<DataModel>;
  myNumber1 = 0;
  myNumber2 = 2000;
  count: any = 0;
  somedata: Ohlc[] = [new Ohlc(5, 9, 3, 4)]; // these are initialized first, constructors overwrite these
  somedata2;

  /*Create fake data from various sources*/
  /*eventually make into a service*/
  mockFromJson: Stock[] = require("../../data.json");
  moreMockdata: Stock[] = [
    new Stock("Tesla", "T", 176.27),
    { name: "Apple", symbol: "AAPL", closingprice: 142.67 },
    { name: "Microsoft", symbol: "MSFT", closingprice: 71.82 },
    { name: "Planting Life Quality", symbol: "PLQ", closingprice: 91.71 },
    { name: "Max", symbol: "ZZZ", closingprice: 89.35 }
  ];
  mockdata = [...MOCKDATA, ...this.moreMockdata, ...this.mockFromJson];

  constructor() {
    this.somedata2 = MSFT;
    this.somedata = [
    { open: 3, close: 6, high: 7, low: 1 },
      { open: 2, close: 8, high: 10, low: 0 },
      { open: 0, close: 10, high: 10, low: 0 },
      { open: 8, close: 2, high: 9, low: 1 }
    ]
  }

  color(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
  }

  preprocess(data) {
    const min = Math.min(...data.map(x => x.low));
    data.map(item => {item.open = item.open-min; item.close = item.close-min; item.high=item.high-min;item.low=item.low-min; return item});
    return data;
  }
}
