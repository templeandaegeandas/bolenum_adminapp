import { Injectable } from '@angular/core';
import { HttpClient } from '../../app.client.interceptor';
import 'rxjs/add/operator/map';

@Injectable()
export class AddNewErcTokenService {

  constructor(private http: HttpClient) { }

  addNewToken(tokenData) {
    return this.http.post('api/v1/admin/add/new/token', tokenData)
      .map(res => res.json())
  }

}
