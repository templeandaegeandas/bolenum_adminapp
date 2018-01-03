import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'users',
  styleUrls: [('./users.scss')],
  templateUrl: './users.html',
  providers: [UsersService]
})
export class Users {

  data;
  start;
  end;
  totalElements;
  currentPage = 1;
  pageSize = 10;
  sortBy: String = 'createdOn';
  sortOrder: String = 'desc';
  searchData: String = '';

  constructor(private service: UsersService, private router: Router) {
    this.getUsersList();
  }

  getUsersList() {
    this.service.getUsersList(
      this.currentPage,
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
    this.getUsersList();
  }

  userDeatils(userId) {
    this.router.navigate(['/pages/userdetails/' + userId])
  }
}
