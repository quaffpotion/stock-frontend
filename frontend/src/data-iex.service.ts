import { Injectable } from '@angular/core';
import { IEXClient } from 'iex-api';
import * as _fetch from 'isomorphic-fetch';

@Injectable({
  providedIn: 'root'
})
export class DataIexService {
  constructor() {}

  iex = new IEXClient(_fetch);

  getCompanyBySymbol(symbol: string) {
    this.iex
      .request('https://api.iextrading.com/1.0/tops?symbols=SNAP,fb,AIG%2b')
      .then(company => console.log(company));
  }
}
