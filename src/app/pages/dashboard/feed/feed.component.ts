import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'toastr-ng2';
import { FeedService } from './feed.service';

@Component({
  selector: 'feed',
  templateUrl: './feed.html',
  styleUrls: ['./feed.scss'],
    providers: [FeedService] ,
})

export class Feed implements OnInit {

  subscribedUserlist: any;
  isLoading: any;
  hasBlur: any;
  feed: any;
  listLength: any;
  constructor(private feedService: FeedService, private toastrService: ToastrService) {
  }

  ngOnInit() {
    this.getListOfSubscribedUser();
  }

  expandMessage(message) {
    message.expanded = !message.expanded;
  }

  getListOfSubscribedUser() {
    this.isLoading = true;
    this.hasBlur = true;
    this.feedService.subscribedUserList(1, 10, 'createdOn', 'desc').subscribe(success => {
      this.isLoading = false;
      this.hasBlur = false;
      this.feed = success.data.content;
      this.listLength = this.feed.length;
    });
  }
}
