import { Injectable } from '@angular/core';
import { HttpClient } from '../../app.client.interceptor';
import 'rxjs/add/operator/map';

@Injectable()
export class AddPairService {
  pageNumber: number;
  constructor(private http: HttpClient) { }

  getPairList() {
    return this.http.get('api/v1/admin/currency-pair/list')
      .map(res => res.json())
  }
}



