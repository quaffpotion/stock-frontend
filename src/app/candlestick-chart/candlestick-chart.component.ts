import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-candlestick-chart',
  templateUrl: './candlestick-chart.component.html',
  styleUrls: ['./candlestick-chart.component.css']
})
export class CandlestickChartComponent implements OnInit, AfterContentInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.loadScripts();
  }

  loadScripts() {
    const dynamicScripts = [
      'https://cdn.jsdelivr.net/npm/lodash@4.17.10/lodash.min.js',
      'https://d3js.org/d3.v5.min.js',
      'http://localhost:4200/assets/script.js'
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
