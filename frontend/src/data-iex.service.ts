import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataIexService {
  constructor(private http: HttpClient) {}

  getCompanyBySymbol(symbol: string) {
    this.http.get('/api/tops').subscribe(j => console.log(j));
  }
}
