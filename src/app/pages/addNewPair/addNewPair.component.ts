import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pairEntityData } from './entity/addNewPair.details';
import { AddNewPairService } from './addNewPair.service';




@Component({
  selector: 'addNewPairs',
  styleUrls: ['./addNewPair.scss'],
  templateUrl: './addNewPair.html',
  providers:[AddNewPairService]
})
export class AddNewPair implements OnInit{
  public currencyDataList:any;
  public setPairTo:any ='Choose To Currency';
  public setPairFrom:any = 'Choose From Currency';
   
  pairedData = new pairEntityData();

  // public setPair:any=[

  //   {setPairValue:"BITCOIN"},
  //   {setPairValue:"ETHEREUM"},
  //   {setPairValue:"BOLENUM"},
  // ]

constructor(private router:Router , private addnewpairservice: AddNewPairService) {}

ngOnInit(){
  this.showCurrencyList();
  
  // this.setPairTo=,
  // this.setPairFrom ="BOLENUM"
  // this.setPairValue("BITCOIN");
  // this.setPairFromValue("BOLENUM");
}

isClose(){
     this.router.navigate(['/pages/addPair/']);

}

setToValue(setData){

  console.log("setData >>>>>>",setData);


}

// setPairFromValue(setFromData){

//   console.log("from >>>>>>>>",setFromData);

// }


pairFormData(formData){

  console.log("form data",this.setPairFrom, this.setPairTo);
  let c = this.currencyDataList.find(x => x.currencyId == this.setPairTo);
  let c1 = this.currencyDataList.find(x => x.currencyId == this.setPairFrom);
  this.pairedData.toCurrency = c;
  this.pairedData.pairedCurrency = c1;
  console.log(this.pairedData);

  this.addnewpairservice.pairFormData(this.pairedData).subscribe( successData =>{
    console.log("data success",successData.data);
    
 this.router.navigate(['/pages/addPair/']);
  },errorData =>{

  })
  
  
}

showCurrencyList(){
  this.addnewpairservice.showCurrencyList().subscribe( successData =>{
    console.log("currency data  >>>>>>>>>>>>>>>>>",successData.data);
    this.currencyDataList = successData.data;
     this.setPairTo = successData.data.currencyName;
  
      



  },errorData => {

  })
}

}


