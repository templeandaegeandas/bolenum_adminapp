import { Component, OnInit } from '@angular/core';
import { AddErc20Service } from './addErc20.service';
import { Router } from '@angular/router';


@Component({
  selector: 'addErc20',
  styleUrls: [('./addErc20.scss')],
  templateUrl: './addErc20.html',
  providers: [AddErc20Service]
})
export class AddErc20 implements OnInit {

  data;
  start;
  end;
  totalElements;
  ercTokenLists: any;
  currentPage = 1;
  pageSize = 10;
  sortBy: String = "createdDate";
  sortOrder: String = "desc";

  constructor(private service: AddErc20Service, private router: Router) { }

  ngOnInit() {
    this.getTokenList();
  }

  getTokenList() {
    this.service.getToken(this.currentPage, this.pageSize, this.sortBy, this.sortOrder).subscribe(successData => {
      this.ercTokenLists = successData.data.content;
    }, error => {
      console.log(error);
    });
  }

  pageChanged($event) {
    this.currentPage = $event;
    this.getTokenList();
  }

  addNewToken() {
    this.router.navigate(['/pages/addNewErc20Token/']);
  }

}
