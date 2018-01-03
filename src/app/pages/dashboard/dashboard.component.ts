import { Component , OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { DashBoardService } from './dashboard.service';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
  providers: [DashBoardService],
})

export class Dashboard implements OnInit {


    hasBlur: boolean= false;
    isLoading: boolean= false;

    setItemValue: any;

    loading = false;
    latestOrders: any;

    constructor(private dashBoardService: DashBoardService, private router: Router) {
    }


  ngOnInit() {
        this.getLatestOrdersList();
  }

  getLatestOrdersList() {
       this.isLoading = true;
       this.hasBlur = true;
       this.dashBoardService.getListOfLatestOrders(1, 10, 'desc' , 'createdOn' ).subscribe(success => {
       this.isLoading = false;
       this.hasBlur = false;
       this.latestOrders = success.data.content;
    });
  }

}
