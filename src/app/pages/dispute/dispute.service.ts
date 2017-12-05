import { Injectable } from '@angular/core';
import { HttpClient } from '../../app.client.interceptor';

@Injectable()
export class DisputeService {
   pageNumber: number;
   constructor(private http: HttpClient) { }

   getDisputeList(currentPage: number, pageSize: number, sortBy: String, sortOrder: String) {
     this.pageNumber = currentPage - 1;
     return this.http.get('api/v1/raised/dispute/list/?pageNumber='
     + this.pageNumber + '&pageSize='
     + pageSize + '&sortBy='
     + sortBy + '&sortOrder=' + sortOrder + '&disputeStatus=dfghj')
       .map(res => res.json())
   }
}
