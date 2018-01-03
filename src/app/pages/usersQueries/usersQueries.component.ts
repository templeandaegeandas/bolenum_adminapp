import { Component } from '@angular/core';
import { ToastrService } from 'toastr-ng2';
import { UsersQueriesService } from './usersQueries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'usersQueries',
  styleUrls: [('./usersQueries.scss')],
  templateUrl: './usersQueries.html',
  providers: [UsersQueriesService],
})
export class UsersQueries  {

  subscribedUserlist: any;
  isLoading: any;
  hasBlur: any;
  listLength: any;
   usersQueries: any;

  constructor(private usersQueriesService: UsersQueriesService, private router: Router, private toastrService: ToastrService) {
    this.getListOfSubscribedUser();
  }

  expandMessage(message) {
    message.expanded = !message.expanded;
  }

  getListOfSubscribedUser() {
    this.isLoading = true;
    this.hasBlur = true;
    this.usersQueriesService.subscribedUserList(1, 10, 'createdOn', 'desc').subscribe(success => {
    this.isLoading = false;
    this.hasBlur = false;
    this.usersQueries = success.data.content;
    this.listLength = this.usersQueries.length;
    });
  }
}

  // navigaeToReply()
  // {
  //   this.router.navigate(['/pages/reply']);
  // }

