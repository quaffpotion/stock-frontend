import { Component, AfterContentInit } from '@angular/core';

import { Stock } from './stock.model';
import { MOCKDATA } from './mockdata';
import * as d3 from 'd3';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MSFT } from './msft';
import { Ohlc } from './ohlc.model';

interface DataModel {
  letter: string;
  frequency: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  data: Observable<DataModel>;
  count: any = 0;
  somedata: Ohlc[];

  /*Create fake data from various sources*/
  /*eventually make into a service*/
  mockFromJson: Stock[] = require('../../data.json');
  moreMockdata: Stock[] = [
    new Stock('Tesla', 'T', 176.27),
    { name: 'Apple', symbol: 'AAPL', closingprice: 142.67 },
    { name: 'Microsoft', symbol: 'MSFT', closingprice: 71.82 },
    { name: 'Planting Life Quality', symbol: 'PLQ', closingprice: 91.71 },
    { name: 'Max', symbol: 'ZZZ', closingprice: 89.35 }
  ];
  mockdata = [...MOCKDATA, ...this.moreMockdata, ...this.mockFromJson];

  // constructor(private http: HttpClient) {
  //   this.data = this.http
  //     .get<DataModel>('./assets/data.json')
  //     .pipe(delay(3000 * this.count++));
  // }

  constructor() {
    this.somedata = [
      new Ohlc(1,10,0,9),
      new Ohlc(5,7,2,3),
      new Ohlc(2,4,1,3),
    ]
  }

  color(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
  }

  ngAfterContentInit() {
    d3.csv('http://localhost:8080/assets/FTSE.csv').then(data =>
      console.log(data)
    );
    this.loadScripts();
  }

  loadScripts() {
    const dynamicScripts = [
      'https://cdn.jsdelivr.net/npm/lodash@4.17.10/lodash.min.js',
      'https://d3js.org/d3.v5.min.js',
      'http://localhost:8080/assets/script.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
}
