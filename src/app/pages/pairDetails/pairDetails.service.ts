import { Injectable } from '@angular/core';
import { HttpClient } from '../../app.client.interceptor';
import 'rxjs/add/operator/map';

@Injectable()
export class PairDetailsService {
  
  constructor(private http: HttpClient) { }


  getPairDetailsById(pairId:number){
      return this.http.get('api/v1/admin/currency/pair?pairId=' + pairId)
      .map(res => res.json())
  }

 
}


