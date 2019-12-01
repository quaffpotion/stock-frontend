import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataIexService {
  constructor(private http: HttpClient) { }

  getCompanyBySymbol() {
    this.http.get('https://api.worldtradingdata.com/api/v1/history?symbol=SNAP&sort=oldest&api_token=demo')
      .pipe(
        map(data => this.dictToArray(data["history"]))
      )
      .subscribe(
        data => console.log(data.slice(0,9))
      )
  }

  getSymbol(symbol: string, num1, num2) {
    this.http.get('https://api.worldtradingdata.com/api/v1/history?symbol=SNAP&sort=oldest&api_token=demo')
      .pipe(
        map(data => this.dictToArray(data["history"]).slice(num1,num2))
      )
  }

  dictToArray(data) {
    return Object.keys(data).map(
      key =>
      {
        return data[key];
      }
    );

  }


}
