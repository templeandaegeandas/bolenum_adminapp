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

  showTosymbol(setPairTo){
    console.log("symbol>>>>>>>>>>>>>>",setPairTo);
    this.showCurrencyList();
       this.showAbberivition= this.currencyDataList.find(x => x.currencyId == this.setPairTo);
      console.log("currency list abberiviation >>>",  this.showAbberivition);
      // this.showAbberivition ==  this.showAbberivition.currencyAbbreviation;
      console.log("abber>>>>>>>>>>>>>>>>>>>",this.showAbberivition.currencyAbbreviation);
      this.toAbber = this.showAbberivition.currencyAbbreviation;
        console.log("toabber>>>>>>>>",   this.toAbber);
         this.fullPairName = this.toAbber + "/" + this.fromAbber; 
         if(this.fromAbber){

            this.fullPairName = this.toAbber + "/" + this.fromAbber; 

         }
          else{

             this.fullPairName = this.toAbber ; 


          }
      
      }

      showFromsymbol(setPairFrom){
        console.log("input data >>>>>",setPairFrom);
        
        this.fromAbbreviation = this.currencyDataList.find(x => x.currencyId == this.setPairFrom);
        console.log("find data >>>>>>>>>>",   this.fromAbbreviation);
        console.log("abberi>>>>>>>>",  this.fromAbbreviation.currencyAbbreviation);
        this.fromAbber = this.fromAbbreviation.currencyAbbreviation;
        // this.fullPairName = this.toAbber + "/" + this.fromAbber; 
        
         if(this.toAbber){

            this.fullPairName = this.toAbber + "/" + this.fromAbber; 

         }
          else{

             this.fullPairName = this.fromAbber ; 


          }


      }
}


