import { Component } from '@angular/core';
import { PendingKycService } from './pendingKyc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pendingKyc',
  styleUrls: [('./pendingKyc.scss')],
  templateUrl: './pendingKyc.html',
  providers: [PendingKycService]
})
export class PendingKyc {

  data;
  start;
  end;
  totalElements;
  currentPage = 1;
  pageSize = 10;
  sortBy = "uploadedDate";
  sortOrder = "ASC";
  searchData = "";

    constructor(private service: PendingKycService, private router: Router) {
    this.getPendingKycList();
  }

  getPendingKycList() {
    this.service.getPendingKycList(this.currentPage,
    this.pageSize,
    this.sortBy,
    this.sortOrder,
    this.searchData).subscribe(success => {
      this.data = success.data.content;
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
  }
}
