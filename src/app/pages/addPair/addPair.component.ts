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

  public pairData:any[] =[
    {"pairName":"BTC","to":"12/10/2012","from":"10/02/16","createdOn":"20/6/17"},
   {"pairName":"BLN","to":"12/10/2012","from":"10/02/16","createdOn":"20/6/17"},
   {"pairName":"BTC","to":"12/10/2012","from":"10/02/16","createdOn":"20/6/17"},
   {"pairName":"BLN","to":"12/10/2012","from":"10/02/16","createdOn":"20/6/17"},
   {"pairName":"BTC","to":"12/10/2012","from":"10/02/16","createdOn":"20/6/17"},
   {"pairName":"BLN","to":"12/10/2012","from":"10/02/16","createdOn":"20/6/17"},
  ]

  

  constructor(private service: AddPairService, private router: Router) {}


  pairDetails(){
    
     this.router.navigate(['/pages/pairdetails/']);
  }

  addNewPair(){

     this.router.navigate(['/pages/addnewpair/']);

  }

}
