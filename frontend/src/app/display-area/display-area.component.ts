import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-area',
  templateUrl: './display-area.component.html',
  styleUrls: ['./display-area.component.css']
})
export class DisplayAreaComponent implements OnInit {
  items = Array(10);

  constructor() {}

  ngOnInit() {}
}
