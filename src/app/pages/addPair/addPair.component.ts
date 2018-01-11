import { Component } from '@angular/core';
import { AddPairService } from './addPair.service';
import { Router } from '@angular/router';
import { Pipe , PipeTransform } from '@angular/core';
import { TableFilterPipe } from './table-filter.pipe';

@Component({
  selector: 'addPair',
  styleUrls: [('./addPair.scss')],
  templateUrl: './addPair.html',
  providers: [AddPairService],

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

 
  constructor(private addPairService: AddPairService, private router: Router) {
     this.getPairList();
  }


   getPairList() {
    this.addPairService.getPairList().subscribe(success => {
      this.data = success.data;
      console.log("data>>>>>>>>>>>>>>>>>", this.data);
      this.totalElements = success.data.totalElements;
      this.start = (this.currentPage - 1) * this.pageSize + 1;
      this.end = (this.currentPage - 1) * this.pageSize + success.data.numberOfElements;
    }, error => {
      console.log(error);
    })
  }

  addNewPair(){

     this.router.navigate(['/pages/addnewpair/']);

  }

}
