import { Injectable } from '@angular/core';
import { HttpClient } from '../../app.client.interceptor';
import 'rxjs/add/operator/map';

@Injectable()
export class NotificationDetailsService {
  pageNumber:any;

  constructor(private http: HttpClient) { }


  getNotificationDetails(currentPage: number,
    pageSize: number,
    sortBy: String,
    sortOrder: String){
       this.pageNumber = currentPage - 1;
    return this.http.get('/api/v1/user/notification?pageNumber=' +
          this.pageNumber +
          '&pageSize=' +
          pageSize +
          '&sortBy=' +
          sortBy +
          '&sortOrder=' +
          sortOrder)
    .map( res=> res.json());
  }

  
}
