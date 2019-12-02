import { Component, OnInit, Input } from "@angular/core";
import { Stock } from "../stock.model";
import { Observable, of, Subject, BehaviorSubject, combineLatest } from "rxjs";
import {
  tap,
  switchMap,
  debounceTime,
  distinctUntilChanged,
  map
} from "rxjs/operators";
import { DataIexService } from "../../data-iex.service";

@Component({
  selector: "app-search-container",
  templateUrl: "./search-container.component.html",
  styleUrls: ["./search-container.component.css"]
})
export class SearchContainerComponent implements OnInit {
  @Input() mockdata: Stock[];
  searchTerm: string;
  searchTerms: Subject<string> = new Subject();
  stocks$: Observable<Stock[]>;
  selectedStock$: Observable<Stock>;
  selected$: BehaviorSubject<number>;
  detailStocks = [];
  selectedStock: Stock;
  filterString = "";
  hidden = true;
  selected: number;
  listlength: number;
  dataIexService: DataIexService;

  constructor(dataIexService: DataIexService) {
    this.selected$ = new BehaviorSubject<number>(0);
    this.dataIexService = dataIexService;
  }

  pushSearchTerm() {
    console.log("Pushing: ", this.filterString);
    this.searchTerms.next(this.filterString);
  }

  searchStocks(term: string): Observable<Stock[]> {
    this.selected = 0;
    this.selected$.next(0);
    const result =
      term == ""
        ? []
        : this.mockdata.filter(
            item =>
              item.name.toLowerCase().includes(term.toLowerCase()) ||
              item.symbol.toLowerCase().includes(term.toLowerCase())
          );
    this.listlength = result.length;
    return of(result);
  }

  ngOnInit(): void {
    this.stocks$ = this.searchTerms.pipe(
      //notice: Angular will update the highlighting before grabbing new searches
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((term: string) => this.searchStocks(term)),
      tap(searchResult => console.log("stocks found: ", searchResult))
    );
    this.selectedStock$ = combineLatest(this.stocks$, this.selected$).pipe(
      map(([stock, selected]) => {
        console.log("***", stock[selected]);
        this.selectedStock = stock[selected];
        return stock[selected];
      })
    );
  }

  onFocus() {
    this.pushSearchTerm();
    
    this.hidden = false;
  }
  onBlur() {
    this.hidden = true;
  }
  handleDown() {
    // this.selected = this.customMod(this.selected + 1, this.listlength);
    this.selected =
      this.selected === this.listlength - 1 ? 0 : this.selected + 1;

    this.selected$.next(this.selected);
  }
  handleUp(e) {
    e.preventDefault(); //default behavior puts cursor at beginning of input box
    this.selected = this.customMod(this.selected - 1, this.listlength);
    this.selected$.next(this.selected);
  }
  handleEnter() {
    this.dataIexService.getCompanyBySymbol();
  }

  customMod(x, n) {
    return ((x % n) + n) % n;
  }
}
