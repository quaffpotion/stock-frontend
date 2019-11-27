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
  myHeight = 115;
  myNumber1 = 0;
  myNumber2 = 1300;
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
  }

  color(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
  }
}
