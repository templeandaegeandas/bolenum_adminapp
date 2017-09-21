import { Injectable } from '@angular/core';
import { HttpClient } from '../../app.client.interceptor';
import 'rxjs/add/operator/map';

@Injectable()
export class PendingKycService {
  pageNumber: number;
  constructor(private http: HttpClient) {

  }
  getPendingKycList(currentPage: number, pageSize: number) {
    this.pageNumber = currentPage - 1;
    return this.http.get('api/v1/admin/list/kyc?pageNumber=' + this.pageNumber + '&pageSize=' + pageSize)
      .map(res => res.json())
  }


}
