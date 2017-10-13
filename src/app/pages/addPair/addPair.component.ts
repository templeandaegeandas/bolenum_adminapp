import { Component } from '@angular/core';
import { AddPairService } from './addPair.service';
import { Router } from '@angular/router';

@Component({
  selector: 'addPair',
  styleUrls: [('./addPair.scss')],
  templateUrl: './addPair.html',
  providers: [AddPairService]
})
export class AddPairComponent {
  data;
  start;
  end;
  totalElements;
  currentPage = 1;
  pageSize = 10;
  sortBy:String = "onCreated";
  sortOrder:String = "desc";
  searchData: String = "";

  // public pairData:any[] =[
  //   {"pairName":"BTC","to":"12/10/2012","from":"10/02/16","createdOn":"20/6/17"},
  //  {"pairName":"BLN","to":"12/10/2012","from":"10/02/16","createdOn":"20/6/17"},
  //  {"pairName":"BTC","to":"12/10/2012","from":"10/02/16","createdOn":"20/6/17"},
  //  {"pairName":"BLN","to":"12/10/2012","from":"10/02/16","createdOn":"20/6/17"},
  //  {"pairName":"BTC","to":"12/10/2012","from":"10/02/16","createdOn":"20/6/17"},
  //  {"pairName":"BLN","to":"12/10/2012","from":"10/02/16","createdOn":"20/6/17"},
  // ]

  

  constructor(private addPairService: AddPairService, private router: Router) {

     this.getPairList();
  }


   getPairList() {
    this.addPairService.getPairList(
      this.currentPage,
      this.pageSize,
      this.sortBy,
      this.sortOrder,
    ).subscribe(success => {
      this.data = success.data.content;
      console.log("data>>>>>>>>>>>>>>>>>", this.data);
      this.totalElements = success.data.totalElements;
      this.start = (this.currentPage - 1) * this.pageSize + 1;
      this.end = (this.currentPage - 1) * this.pageSize + success.data.numberOfElements;
    }, error => {
      console.log(error);
    })
  }

  pairDetails(pairID){
    console.log("pairid >>>>>>>>>>>>>>>>>>>>>>",pairID);
    
     this.router.navigate(['/pages/pairdetails/' + pairID ]);
  }

  addNewPair(){

     this.router.navigate(['/pages/addnewpair/']);

  }

  pageChanged($event) {
    this.currentPage = $event;
    this.getPairList();
  }

 

}
