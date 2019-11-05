import { Injectable } from '@angular/core';
import { IEXClient } from 'iex-api';
import { HttpClient } from '@angular/common/http';
import * as _fetch from 'isomorphic-fetch';

@Injectable({
  providedIn: 'root'
})
export class DataIexService {
  iex: IEXClient;

  constructor(private http: HttpClient) {
    this.iex = new IEXClient(_fetch);
  }

  getCompanyBySymbol(symbol: string) {
    this.http.get('/api/tops').subscribe(j => console.log(j));
    // this.iex.stockCompany('AAPL').then(company => console.log(company)); //Returns forbidden, perhaps API is outdated?
  }
}
