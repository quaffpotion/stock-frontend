import { Component } from "@angular/core";
import { MSFT } from "./msft";
import { Stock } from "./stock.model";
import { MOCKDATA } from "./mockdata";
import { Observable } from "rxjs";
import { Ohlc } from "./ohlc.model";
import { DataIexService } from 'src/data-iex.service';

import { map,tap } from 'rxjs/operators';

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
  myStock = "SNAP";
  count: any = 0;
  somedata = [new Ohlc(3,7,1,6), new Ohlc(8,10,0,2)];
  somedata2 = MSFT;
  stocks$;
  mydata;
  

  constructor(private iex: DataIexService) {}

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


  color(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
  }

  preprocess(data) {
    data = data.map(x => {return {open: x.open, close:x.close, high:x.high, low:x.low}});// deep copy
    const min = Math.min(...data.map(x => x.low));
    data.map(item => {item.open = item.open-min; item.close = item.close-min; item.high=item.high-min;item.low=item.low-min; return item});
    return data;
  }

  getData() {
    this.mydata = this.iex.getSymbol(this.myStock, this.myNumber1,this.myNumber2).pipe(
      tap(data => console.log(data[0])),
      map(data => this.preprocess(data)),
      tap(data => console.log(data[0]))
      );
  }
}
