import { Component } from '@angular/core';
import { HistoricalOrderbookService } from './historicalOrderbook.service';
import { Router } from '@angular/router';


@Component({
  selector: 'historicalOrderbook',
  styleUrls: [('./historicalOrderbook.scss')],
  templateUrl: './historicalOrderbook.html',
  providers: [HistoricalOrderbookService]
})
export class HistoricalOrderbook {

  data;
  start;
  end;
  totalElements;
  currentPage = 1;
  pageSize = 10;
  sortBy:String = "createdOn";
  sortOrder:String = "desc";

    constructor(private service: HistoricalOrderbookService, private router: Router) {
    this.getTradedOrderList();
  }
  getTradedOrderList() {
    this.service.getTradedOrderList(
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
    this.getTradedOrderList();
  }

  // navigaeToOrderDetails()
  // {
  //   this.router.navigate(['/pages/orderdetails'])
  // }
}
