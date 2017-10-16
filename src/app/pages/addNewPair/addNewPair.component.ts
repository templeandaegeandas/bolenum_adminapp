import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pairEntityData } from './entity/addNewPair.details';
import { AddNewPairService } from './addNewPair.service';




@Component({
  selector: 'addNewPairs',
  styleUrls: ['./addNewPair.scss'],
  templateUrl: './addNewPair.html',
  providers: [AddNewPairService]
})
export class AddNewPair implements OnInit {
  public hasError: boolean = false;
  public errorMessageShow: any;
  public currencyDataList: any;
  public setPairTo: any = '';
  public setPairFrom: any = 'Choose From Currency';

  pairedData = new pairEntityData();

  // public setPair:any=[

  //   {setPairValue:"BITCOIN"},
  //   {setPairValue:"ETHEREUM"},
  //   {setPairValue:"BOLENUM"},
  // ]

  constructor(private router: Router, private addnewpairservice: AddNewPairService) { }

  ngOnInit() {
    this.showCurrencyList();

    // this.setPairTo=,
    // this.setPairFrom ="BOLENUM"
    // this.setPairValue("BITCOIN");
    // this.setPairFromValue("BOLENUM");
  }

  isClose() {
    this.router.navigate(['/pages/addPair/']);

  }

  setToValue(setData) {

    console.log("setData >>>>>>", setData);


  }

  // setPairFromValue(setFromData){

  //   console.log("from >>>>>>>>",setFromData);

  // }


  pairFormData(formData) {

    console.log("form data", this.setPairFrom, this.setPairTo);
    let c = this.currencyDataList.find(x => x.currencyId == this.setPairTo);
    let c1 = this.currencyDataList.find(x => x.currencyId == this.setPairFrom);
    this.pairedData.toCurrency = c;
    this.pairedData.pairedCurrency = c1;
    console.log(this.pairedData);

    this.addnewpairservice.pairFormData(this.pairedData).subscribe(successData => {

      this.router.navigate(['/pages/addPair/']);
    }, errorData => {
      this.hasError = true;
      let errorDATA = errorData.json();
      this.errorMessageShow = errorDATA.message;
      setTimeout(()=>{    //<<<---    using ()=> syntax
      this.hasError = false;
 },3000);
    })
 }

  showCurrencyList() {
    this.addnewpairservice.showCurrencyList().subscribe(successData => {
    this.currencyDataList = successData.data;
    }, errorData => {

    })
  }

  toCurrency(fromValue) {


  }
}

