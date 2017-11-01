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

  approveKyc(kycId: Number) {
    return this.http.put('api/v1/kyc/approve?kycId=' + kycId, '')
      .map(res => res.json())
  }

  disApproveKyc(disApproveData) {
    return this.http.put('api/v1/kyc/disapprove', disApproveData)
      .map(res => res.json())
  }

  getBankDetails(userId ) {
    return this.http.get('api/v1/user/admin/bankdetails?userId=' + userId )
    .map(res => res.json())
  }

getKycByUserId(userId){
  return this.http.get('api/v1/kyc/by/userid?userId=' + userId)
  .map(res => res.json())
}

}
