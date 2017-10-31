import { Injectable } from '@angular/core';
import { HttpClient } from '../../app.client.interceptor';
import 'rxjs/add/operator/map';

@Injectable()
export class PendingKycService {
  pageNumber: number;
  constructor(private http: HttpClient) {

  }
  getPendingKycList(currentPage: number, pageSize: number, sortBy: String, sortOrder: String, searchData: String) {
    this.pageNumber = currentPage - 1;
    return this.http.get('api/v1/list/kyc?pageNumber='
    + this.pageNumber + '&pageSize='
    + pageSize + '&sortBy='
    + sortBy + '&sortOrder=' + sortOrder + '&searchData=' + searchData)
      .map(res => res.json())
  }


}


