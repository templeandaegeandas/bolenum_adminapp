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
  public fullPairName:any;
  public fromAbber:any
  public toAbber:any;
  public fromAbbreviation:any;
  public showAbberivition:any;
  public hasError: boolean = false;
  public errorMessageShow: any;
  public currencyDataList: any;
  public setPairTo: any = '';
  public setPairFrom: any = 'Choose From Currency';

  pairedData = new pairEntityData();

  constructor(private router: Router, private addnewpairservice: AddNewPairService) { }

  ngOnInit() {
    this.showCurrencyList();
  }

  isClose() {
    this.router.navigate(['/pages/addPair/']);

  }

  setToValue(setData) {
    console.log("setData >>>>>>", setData);
  }

  pairFormData(formData) {
    console.log("form data", this.setPairFrom, this.setPairTo);
    this.addnewpairservice.pairFormData(this.setPairTo, this.setPairFrom).subscribe(successData => {
      this.router.navigate(['/pages/addPair/']);
    }, errorData => {
      this.hasError = true;
      console.log(errorData)
      this.errorMessageShow = errorData.json().message;
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

  showSymbol(){
    if(this.setPairTo == 'Choose From Currency' || this.setPairFrom == 'Choose From Currency') {
      return;
    }
    this.fullPairName = this.setPairFrom+"/"+this.setPairTo;
      }
}


