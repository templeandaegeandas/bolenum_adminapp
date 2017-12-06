import { Injectable } from '@angular/core';
import { HttpClient } from '../../app.client.interceptor';

@Injectable()
export class DisputeDetailsService {
   constructor(private http: HttpClient) { }

   getDisputeDetails(disputeId: number) {
     return this.http.get('api/v1/raised/dispute?disputeId=' + disputeId)
       .map(res => res.json())
   }

   changeStatus(status, disputeId, comment) {
     return this.http.post('api/v1/action/raised/dispute?disputeId='
      + disputeId + '&disputeStatus='
       + status + '&commentForDisputeRaiser='
       + comment+'&commentForDisputeRaisedAgainst="dfghjkyui"', '')
       .map(res => res.json())
   }
}
