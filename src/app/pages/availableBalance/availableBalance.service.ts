import { Injectable } from '@angular/core';
import { HttpClient } from '../../app.client.interceptor';
import 'rxjs/add/operator/map';

@Injectable()
export class AvailableBalanceService {

  constructor(private http: HttpClient) { }

  getCurrencyList() {

    return this.http.get("api/v1/admin/currency/list")
      .map(res => res.json())
  }

  getCoin(currencyType, code) {
    return this.http.get("/api/v1/admin/deposit?currencyType=" + currencyType + "&code=" + code)
      .map(res => res.json());
  }

  withdrawFromWallet(currencyType, code, withdrawBalanceForm) {
    return this.http.post("/api/v1/admin/withdraw?currencyType=" + currencyType + "&code=" + code, withdrawBalanceForm)
      .map(res => res.json());
  }
}
