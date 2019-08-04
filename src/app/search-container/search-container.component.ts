import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import { Stock } from '../stock.model';
import { Observable, of, Subject } from 'rxjs';
import {
  tap,
  switchMap,
  debounceTime,
  distinctUntilChanged
} from 'rxjs/operators';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit {
  @Input() mockdata: Stock[];
  searchTerms: Subject<string> = new Subject();
  stocks$: Observable<Stock[]>;
  stocks: Stock[] = [
    new Stock('WRN', 'Warren', 67.11),
    new Stock('BDN', 'Biden', 87.17),
    new Stock('BRNI', 'Bernie', 45.12)
  ];
  hidden = true;
  selected: number;

  constructor() {}

  pushSearchTerm(term: string) {
    console.log('Pushing: ' + term);
    this.searchTerms.next(term);
  }

  searchStocks(term: string): Observable<Stock[]> {
    this.selected = 0;
    const result =
      term == ''
        ? []
        : this.mockdata.filter(
            item => item.name.includes(term) || item.symbol.includes(term)
          );
    return of(result);
  }

  ngOnInit(): void {
    this.stocks$ = this.searchTerms.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((term: string) => this.searchStocks(term)),
      tap(searchResult => console.log('stocks found: ', searchResult))
    );
  }

  onFocus(value: string) {
    this.pushSearchTerm(value);
    this.hidden = false;
  }
  onBlur() {
    this.hidden = true;
  }
  handleDown() {
    this.selected++;
  }
  handleUp() {
    this.selected--;
  }
}
