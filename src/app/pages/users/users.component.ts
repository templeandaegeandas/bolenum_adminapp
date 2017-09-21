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
  //   filterQuery = "";
  //   rowsOnPage = 10;
  //   sortBy = "email";
  //   sortOrder = "asc";

    constructor(private service: UsersService, private router: Router) {
      this.getUsersList();
    // this.service.getDataTable().then((data) => {
    //   this.data = data;
    // });
  }

  getUsersList() {
    this.service.getUsersList(this.currentPage, this.pageSize).subscribe(success => {
      this.data = success.data.content;
      this.end = success.data.numberOfElements;
      this.totalElements = success.data.totalElements;
      this.start = (this.currentPage - 1) * 10 + 1;
    }, error => {
      console.log(error);
    })
  }

  pageChanged($event) {
    this.currentPage = $event;
    this.getUsersList();
  }

    // toInt(num: string) {
    //     return +num;
    // }
    //
    // sortByWordLength = (a: any) => {
    //     return a.city.length;
    // }
  userDeatils(userId) {
    this.router.navigate(['/pages/userdetails/' + userId])
  }
}
