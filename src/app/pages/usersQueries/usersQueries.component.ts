import { Component } from "@angular/core";
import { ToastrService } from "toastr-ng2";
import { UsersQueriesService } from "./usersQueries.service";
import { Router } from "@angular/router";

@Component({
  selector: "usersQueries",
  styleUrls: ["./usersQueries.scss"],
  templateUrl: "./usersQueries.html",
  providers: [UsersQueriesService]
})
export class UsersQueries {
  // subscribedUserlist: any;
  // isLoading: any;
  // hasBlur: any;
  // listLength: any;
  usersQueries: any;
  data;
  start;
  end;
  totalElements;
  currentPage = 1;
  pageSize = 10;
  sortBy: String = "createdOn";
  sortOrder: String = "desc";
  searchData: String = "";
  constructor(
    private service: UsersQueriesService,
    private router: Router,
    private toastrService: ToastrService
  ) {
    this.getListOfSubscribedUser();
  }

  getListOfSubscribedUser() {
    this.service
      .subscribedUserList(
        this.currentPage,
        this.pageSize,
        this.sortBy,
        this.sortOrder
      )
      .subscribe(
        success => {
          this.data = success.data.content;
          this.totalElements = success.data.totalElements;
          this.start = (this.currentPage - 1) * this.pageSize + 1;
          this.end =
            (this.currentPage - 1) * this.pageSize +
            success.data.numberOfElements;
        },
        error => {
          console.log(error);
        }
      );
  }

  pageChanged($event) {
    this.currentPage = $event;
    this.getListOfSubscribedUser();
  }
}
// navigaeToReply()
// {
//   this.router.navigate(['/pages/reply']);
// }
