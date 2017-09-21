import { Injectable } from '@angular/core';
import { HttpClient } from '../../app.client.interceptor';
import 'rxjs/add/operator/map';

@Injectable()
export class UserDetailsService {

  constructor(private http: HttpClient) {}

  getUsersDetails(userId: Number) {
    return this.http.get('api/v1/admin/user/' + userId)
      .map(res => res.json())
  }

  approveKyc(userId: Number) {
    return this.http.put('api/v1/user/kyc/approve/' + userId, '')
      .map(res => res.json())
  }

}
