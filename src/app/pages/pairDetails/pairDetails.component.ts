import { Component,OnInit} from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { PairDetailsService } from './pairDetails.service';
import { PairDetailsEntity } from './entity/pair.details';




@Component({
  selector: 'pairDetails',
  styleUrls: ['./pairDetails.scss'],
  templateUrl: './pairDetails.html',
  providers: [PairDetailsService],
})
export class PairDetails implements OnInit{
  public pairId:number;
  // public hasEdit:boolean = true;
  // public isEdit:boolean = true;
  // public isSave:boolean = false;
  public pairData = new PairDetailsEntity();
  
constructor(private router: Router, private activeRoute: ActivatedRoute,private pairdetails: PairDetailsService ) {}
isclose(){
       this.router.navigate(['/pages/addPair/']);

}

ngOnInit(){
  this.activeRoute.params.subscribe(params => {
      this.pairId = +params['pairID'];
    });

    console.log("userid>>>>>>>>>>>>>>>>>>>>>>>>", this.pairId);

    this.getPairDetailsById(this.pairId);

}

// editDetail(){
//   this.isEdit = false;
//    this.isSave = true;
//    this.hasEdit = false;
// }

// saveDetails(){

//   this.isSave = false;
//   this.isEdit = true;
//   this.hasEdit = true;
  
// }

getPairDetailsById(pairId){

  this.pairdetails.getPairDetailsById(pairId).subscribe( successData =>{

    console.log("successData >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",successData.data);
    this.pairData.pairname = successData.data.pairName;
    this.pairData.to = successData.data.toCurrency[0].currencyName;
    this.pairData.from = successData.data.pairedCurrency[0].currencyName;
    console.log("pairname >>>>>>>>>>>>>>>>>", this.pairData.pairname);
    console.log("to >>>>>>>>>>>>>>>>>", this.pairData.to);
    console.log("from >>>>>>>>>>>>>>>>>", this.pairData.from);
    



  },error =>{

  })
  
}

}
