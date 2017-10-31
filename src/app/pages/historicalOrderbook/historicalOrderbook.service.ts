import {Injectable} from '@angular/core';
import { HttpClient } from '../../app.client.interceptor';

@Injectable()
export class HistoricalOrderbookService {
  pageNumber: number;
  constructor(private http: HttpClient) { }

  getTradedOrderList(currentPage: number, pageSize: number, sortBy: String, sortOrder: String) {
    this.pageNumber = currentPage - 1;
    return this.http.get('api/v1/user/get/trade/list?pageNumber='
    + this.pageNumber + '&pageSize='
    + pageSize + '&sortBy='
    + sortBy + '&sortOrder=' + sortOrder)
      .map(res => res.json())
  }
}
