import { Component } from '@angular/core';
import { DisputeService } from './dispute.service';
import { Router } from '@angular/router';


@Component({
  selector: 'dispute',
  styleUrls: [('./dispute.scss')],
  templateUrl: './dispute.html',
  providers: [DisputeService],
})
export class Dispute {

  data;
  start;
  end;
  totalElements;
  currentPage = 1;
  pageSize = 10;
  sortBy: String = "createdOn";
  sortOrder: String = "desc";

  constructor(private service: DisputeService, private router: Router) {
    this.getDisputeList();
  }

  navigaeToDisputedetails(disputeId) {
    this.router.navigate(['/pages/dispute/details/' + disputeId])
  }

  getDisputeList() {
    this.service.getDisputeList(
      this.currentPage,
      this.pageSize,
      this.sortBy,
      this.sortOrder).subscribe(success => {
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
    this.getDisputeList();
  }

}
