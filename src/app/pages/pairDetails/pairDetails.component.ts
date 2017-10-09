import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'pairDetails',
  styleUrls: ['./pairDetails.scss'],
  templateUrl: './pairDetails.html'
})
export class PairDetails {
  public hasEdit:boolean = true;
  public isEdit:boolean = true;
  public isSave:boolean = false;
  
constructor(private router: Router) {}
isclose(){
       this.router.navigate(['/pages/addPair/']);

}

editDetail(){
  this.isEdit = false;
   this.isSave = true;
   this.hasEdit = false;
}

saveDetails(){

  this.isSave = false;
  this.isEdit = true;
  this.hasEdit = true;
  
}

}
