import { Injectable } from '@angular/core';
import { HttpClient } from '../../app.client.interceptor';
import 'rxjs/add/operator/map';

@Injectable()
export class AddNewPairService {

  constructor(private http: HttpClient) { }


  showCurrencyList(){
      return this.http.get('api/v1/admin/all/currency/list')
      .map(res => res.json())
  }

  pairFormData(pairedCurrency){
       return this.http.post('api/v1/admin/currency/pair', pairedCurrency)
      .map(res => res.json())

  }

}
