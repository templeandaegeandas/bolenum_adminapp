import { Component,OnInit } from '@angular/core';
import { AddErc20Service } from './addErc20.service';
import { Router } from '@angular/router';


@Component({
  selector: 'addErc20',
  styleUrls: [('./addErc20.scss')],
  templateUrl: './addErc20.html',
  providers: [AddErc20Service]
})
export class AddErc20 implements OnInit {

  public ercTokenLists:any;

   data;
    filterQuery = '';
    rowsOnPage = 10;
  
  currentPage = 1;
  pageSize = 10;
  sortBy:String = "createdDate";
  sortOrder:String = "desc";
  // searchData: String = "";

    constructor(private service: AddErc20Service, private router: Router) {
    this.service.getDataTable().then((data) => {
      this.data = data;
    });
  }



  ngOnInit(){

    this.getTokenList();
  }


  
    getTokenList(){
    this.service.getToken(this.currentPage, this.pageSize,this.sortBy,this.sortOrder).subscribe( successData => {

      this.ercTokenLists = successData.data.content;

      console.log("success Data>>>>>>>>>>>",successData.data);
      console.log("contact address>>>>>>>>>>>",successData.data.content[0].contractAddress);
      console.log("createdDate>>>>>>>>>>>",successData.data.content[0].createdDate);
      console.log("walletAddress>>>>>>>>>>>",successData.data.content[0].walletAddress);
      

    },errorData => {

    });

  }




    toInt(num: string) {
        return +num;
    }

    sortByWordLength = (a: any) => {
        return a.city.length;
    }
  navigaeToAdderDetails()
  {
    this.router.navigate(['/pages/adderdetails'])
  }
}
