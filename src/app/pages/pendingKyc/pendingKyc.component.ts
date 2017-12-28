import { Component } from '@angular/core';
import { PendingKycService } from './pendingKyc.service';
import { Router } from '@angular/router';
import { AppEventEmiterService } from '../../app.event.emmiter.service';

@Component({
  selector: 'pendingKyc',
  styleUrls: [('./pendingKyc.scss')],
  templateUrl: './pendingKyc.html',
  providers: [PendingKycService]
})
export class PendingKyc {
  user;
  data;
  start;
  end;
  totalElements;
  currentPage = 1;
  pageSize = 10;
  sortBy = "uploadedDate";
  sortOrder = "desc";
  searchData = "";

  constructor(private service: PendingKycService,
    private router: Router,
    private appEventEmiterService: AppEventEmiterService) {
    appEventEmiterService.currentMessage.subscribe(message => {
      if (message == 'DOCUMENT_VERIFICATION') {
        this.getPendingKycList();
      }
    })
    this.getPendingKycList();
  }

  getPendingKycList() {
    this.service.getPendingKycList(this.currentPage,
      this.pageSize,
      this.sortBy,
      this.sortOrder,
      this.searchData).subscribe(success => {
        console.log("pending kyc list >>>>", success.data);

        this.data = success.data.content;
        console.log(" data for content >>>>>>>>", this.data);

        this.totalElements = success.data.totalElements;
        this.start = (this.currentPage - 1) * this.pageSize + 1;
        this.end = (this.currentPage - 1) * this.pageSize + success.data.numberOfElements;
      }, error => {
        console.log(error);
      })
  }

  pageChanged($event) {
    this.currentPage = $event;
    this.getPendingKycList();
  }

  navigaeToKycDeatils(userId) {
    this.router.navigate(['/pages/kycDetails/' + userId]);
    this.getPendingKycList();
  }
}
