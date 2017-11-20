import { Injectable } from '@angular/core';
import { HttpClient } from '../../app.client.interceptor';
import 'rxjs/add/operator/map';

@Injectable()
export class DashBoardService {

  constructor(private http: HttpClient) { }

  pageNumber: any;
  pageSize: any;
  sortBy: any;
  sortOrder: any;

  getListOfLatestOrders(currentPage: number, pageSize: number, sortBy: String, sortOrder: String) {
  this.pageNumber = currentPage - 1;
  return this.http.get('/api/v1/admin/latest/order/list?pageNumber='
    + this.pageNumber + '&pageSize='
    + pageSize + '&sortBy='
    + sortBy + '&sortOrder='
    + sortOrder)
    .map(res => res.json());
  }

}
