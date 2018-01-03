import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '../../app.client.interceptor';
@Injectable()
export class UsersQueriesService {
pageNumber: number;
constructor(private http: HttpClient) { }

    subscribedUserList(currentPage: number, pageSize: number, sortBy: String, sortOrder: String) {
    this.pageNumber = currentPage - 1;
    return this.http.get('/api/v1/admin/subscribe?pageNumber='
      + this.pageNumber + '&pageSize='
      + pageSize + '&sortBy='
      + sortBy + '&sortOrder='
      + sortOrder)
      .map(res => res.json());
    }

  }
