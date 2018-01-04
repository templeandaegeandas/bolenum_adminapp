import { Injectable } from '@angular/core';
import { HttpClient } from '../../app.client.interceptor';
import 'rxjs/add/operator/map';

@Injectable()
export class TradingService {
  pageNumber: number;
  constructor(private http: HttpClient) { }
  
  setTradingFees(trading) {
    return this.http.post('api/v1/admin/trade/fees', trading)
      .map(res => res.json())
  }

  getTradingFees() {
    return this.http.get('api/v1/admin/trade/fees')
      .map(res => res.json())
  }

}
