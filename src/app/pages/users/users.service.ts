import { Injectable } from '@angular/core';
import { HttpClient } from '../../app.client.interceptor';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
  pageNumber: number;
  constructor(private http: HttpClient) { }

  getUsersList(currentPage: number, pageSize: number) {
    this.pageNumber = currentPage - 1;
    return this.http.get('api/v1/admin/list/users?pageNumber=' + this.pageNumber + '&pageSize=' + pageSize)
      .map(res => res.json())
  }
}
