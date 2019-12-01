import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataIexService {
  constructor(private http: HttpClient) {}

  getCompanyBySymbol(symbol: string) {
    this.http
      .get("https://api.iextrading.com/1.0/tops/last")
      .subscribe(j => console.log(j));
  }
}
