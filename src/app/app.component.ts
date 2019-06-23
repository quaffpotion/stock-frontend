import { Component } from '@angular/core';

var json = require('../../data.json')
console.log(json)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stock-frontend';
}
