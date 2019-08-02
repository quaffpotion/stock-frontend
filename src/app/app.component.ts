import { Component } from "@angular/core";
import { Observable, Subject, of, interval } from "rxjs";
import {
  tap,
  switchMap,
  debounceTime,
  distinctUntilChanged
} from "rxjs/operators";

import { Stock } from "./stock.model";
import { MOCKDATA } from "./mockdata";

var json: Stock[] = require("../../data.json");

var more_mockdata: Stock[] = [
  new Stock("Tesla", "T", 176.27),
  { name: "Apple", symbol: "AAPL", closingprice: 142.67 },
  { name: "Microsoft", symbol: "MSFT", closingprice: 71.82 },
  { name: "Planting Life Quality", symbol: "PLQ", closingprice: 91.71 },
  { name: "Max", symbol: "ZZZ", closingprice: 89.35 }
];

var mockdata = [...MOCKDATA, ...more_mockdata, ...json]

console.log(mockdata);

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  stocks$: Observable<Stock[]>;
  private searchTerms = new Subject<string>();

  pushSearchTerm(term: string) {
    console.log("Pushing: " + term);
    this.searchTerms.next(term);
  }

  searchStocks(term: string): Observable<Stock[]> {
    return of(
      term == ""
        ? []
        : mockdata.filter(
            item => item.name.includes(term) || item.symbol.includes(term)
          )
    );
  }

  ngOnInit(): void {
    this.stocks$ = this.searchTerms.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((term: string) => this.searchStocks(term)),
      tap(searchResult => console.log("stocks found: ", searchResult))
    );
  }


  mylogger() {
    console.log("testing log")
  }

  title = "stock-frontend";
}
