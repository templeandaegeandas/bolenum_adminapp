import { Injectable } from '@angular/core';
import { HttpClient } from '../../app.client.interceptor';
import 'rxjs/add/operator/map';

@Injectable()
export class SetValueService {

  constructor(private http: HttpClient) {

  }

  setBLNNGN(BLNNGN) {
    return this.http.put('/api/v1/admin/set/bln_ngn', BLNNGN)
      .map(res => res.json())
  }
}
