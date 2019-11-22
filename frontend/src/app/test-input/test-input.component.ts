import { Component, OnInit, Input } from "@angular/core";
import { Ohlc } from "../ohlc.model";

@Component({
  selector: "app-test-input",
  template: `
    Test template

    <div *ngFor="let item of data">{{ test }} {{ item.close }}</div>
  `,
  styleUrls: ["./test-input.component.css"]
})
export class TestInputComponent implements OnInit {
  @Input() data = [new Ohlc(2, 3, 4, 5), new Ohlc(4, 5, 1, 0)];
  test: String;

  constructor() {
    this.test = "hardcoded";
  }

  ngOnInit() {}
}
