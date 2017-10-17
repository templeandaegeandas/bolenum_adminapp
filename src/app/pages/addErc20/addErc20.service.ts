import { Injectable } from '@angular/core';
import { HttpClient } from '../../app.client.interceptor';
import 'rxjs/add/operator/map';


@Injectable()
export class AddErc20Service {
  pageNumber: number;
  constructor(private http: HttpClient) { }

  getToken(currentPage: number, pageSize: number, sortBy: String, sortOrder: String) {
    this.pageNumber = currentPage - 1;
    return this.http.get('api/v1/admin/get/token/list?pageNumber='
      + this.pageNumber + '&pageSize='
      + pageSize + '&sortBy='
      + sortBy + '&sortOrder=' + sortOrder)
      .map(res => res.json());
  }
}
