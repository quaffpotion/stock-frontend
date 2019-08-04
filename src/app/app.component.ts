import { Component, OnInit } from "@angular/core";
import { Observable, Subject, of } from "rxjs";
import {
  tap,
  switchMap,
  debounceTime,
  distinctUntilChanged
} from "rxjs/operators";

import { Stock } from "./stock.model";
import { MOCKDATA } from "./mockdata";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  /*Create fake data from various sources*/
  /*eventually made into a service*/
  mockFromJson: Stock[] = require("../../data.json");
  moreMockdata: Stock[] = [
    new Stock("Tesla", "T", 176.27),
    { name: "Apple", symbol: "AAPL", closingprice: 142.67 },
    { name: "Microsoft", symbol: "MSFT", closingprice: 71.82 },
    { name: "Planting Life Quality", symbol: "PLQ", closingprice: 91.71 },
    { name: "Max", symbol: "ZZZ", closingprice: 89.35 }
  ];
  mockdata = [...MOCKDATA, ...this.moreMockdata, ...this.mockFromJson];

  /*For searching functionality*/
  stocks$: Observable<Stock[]>;
  searchTerms = new Subject<string>();
  title = "stock-frontend";

  pushSearchTerm(term: string) {
    console.log("Pushing: " + term);
    this.searchTerms.next(term);
  }

  searchStocks(term: string): Observable<Stock[]> {
    return of(
      term == ""
        ? []
        : this.mockdata.filter(
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

  mylogger(event) {
    console.log(event);
  }
}
