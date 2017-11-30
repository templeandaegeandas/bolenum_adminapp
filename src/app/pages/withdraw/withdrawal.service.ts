import { Injectable } from '@angular/core';
import { HttpClient } from '../../app.client.interceptor';
import 'rxjs/add/operator/map';

@Injectable()
export class WithdrawService {
  pageNumber: number;
  constructor(private http: HttpClient) { }

  setMinWithdrawLimit(withdraw) {
    return this.http.post('api/v1/admin/withdraw/fees', withdraw)
      .map(res => res.json())
  }

  getMinWithdrawLimit(currencyId) {
    return this.http.get('api/v1/admin/withdraw/fees?currencyId=' + currencyId)
      .map(res => res.json())
  }

  getCurrencyList() {
    return this.http.get('api/v1/admin/currency/list')
      .map(res => res.json())
  }

}
