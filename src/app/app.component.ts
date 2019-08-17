import { Component, AfterContentInit } from '@angular/core';

import { Stock } from './stock.model';
import { MOCKDATA } from './mockdata';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  /*Create fake data from various sources*/
  /*eventually made into a service*/
  mockFromJson: Stock[] = require('../../data.json');
  moreMockdata: Stock[] = [
    new Stock('Tesla', 'T', 176.27),
    { name: 'Apple', symbol: 'AAPL', closingprice: 142.67 },
    { name: 'Microsoft', symbol: 'MSFT', closingprice: 71.82 },
    { name: 'Planting Life Quality', symbol: 'PLQ', closingprice: 91.71 },
    { name: 'Max', symbol: 'ZZZ', closingprice: 89.35 }
  ];
  mockdata = [...MOCKDATA, ...this.moreMockdata, ...this.mockFromJson];

  ngAfterContentInit() {
    console.log(d3.select('div'));
  }
}
