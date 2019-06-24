import { Component } from '@angular/core';
import { Observable, Subject, of, interval } from 'rxjs';
import { tap } from 'rxjs/operators'
import { Stock } from './stock.model'

//We want multiple things to be able to get
//the stream of searches
const searchTerms = new Subject<string>()

const filteredstocks = of(mockdata)

// const myinterval = interval(500)
// const subB = myinterval.subscribe(value => console.log(value))
// const tappedsub = myinterval.pipe(
//   tap(
//     _ => console.log("tapped" + _)
//   )
// ).subscribe()

var json = require('../../data.json')
console.log(json)

var mockdata = [
  new Stock("Tesla", "T", 176.27),
  {name: "Apple", symbol: "AAPL", closingprice: 142.67},
  {name: "Microsoft", symbol: "MSFT", closingprice: 71.82},
  {name: "Planting Life Quality", symbol: "PLQ", closingprice: 91.71}
]

//const subA = searchTerms.subscribe(term => console.log(term))

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pushSearchTerm(term: string) {

    console.log("Pushing: " + term)
    searchTerms.next(term)

  }

  //return mockdata.filter(stock => stock.symbol.includes(term))

  title = 'stock-frontend';
  testing = [1,2,3]
}
