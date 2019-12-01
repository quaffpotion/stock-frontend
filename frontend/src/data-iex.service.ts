import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataIexService {
  constructor(private http: HttpClient) { }

  getCompanyBySymbol() {
    this.http.get('https://api.worldtradingdata.com/api/v1/history?symbol=SNAP&sort=newest&api_token=demo')
      .subscribe(data => console.log(this.dictToArray(data["history"]).slice(0,9)));
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
