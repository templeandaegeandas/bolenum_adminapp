import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'toastr-ng2';
import { AvailableBalanceService } from './availableBalance.service'
import { WithdrawForm } from './entity/withdraw.entity';


@Component({
  selector: 'availableBalance',
  styleUrls: ['./availableBalance.scss'],
  templateUrl: './availableBalance.html',
  providers: [AvailableBalanceService]
})
export class AvailableBalanceComponent {
  currencyData: any;
  setItemValue: any;
  address: any;
  balance: any;
  coinAbbreviation: any;
  toAddress: any;
  withdrawAmount: any;
  constructor(private availableBalanceService: AvailableBalanceService,
  private toastrService: ToastrService) {
    this.getCurrencyList();
  }

  getCurrencyList() {
    this.availableBalanceService.getCurrencyList().subscribe(success => {
      this.currencyData = success.data;
      if (this.currencyData.length > 0) {
        this.setItemValue = this.currencyData[0].currencyAbbreviation;
        this.getBalance(this.setItemValue);
      }
    }, error => {
      console.log(error);
    });

  }

  getBalance(data) {
    let c = this.currencyData.find(x => x.currencyAbbreviation == data);
    this.availableBalanceService.getCoin(c.currencyType, data).subscribe(success => {
      let successData = success.data;
      if (successData.data != null) {
        this.address = successData.data.address;
        this.balance = successData.data.balance + " " + data;
        this.coinAbbreviation = successData.data.coinAbbreviation;
      }
    }, errorData => {
      console.log(errorData)
    })
  }

  withdraw(form) {
    if (form.invalid) return;
    let c = this.currencyData.find(x => x.currencyAbbreviation == this.setItemValue);
    this.availableBalanceService.withdrawFromWallet(c.currencyType,
      c.currencyAbbreviation,
      { 'withdrawAmount': this.withdrawAmount, 'toAddress': this.toAddress })
    .subscribe(success => {
      this.getBalance(c.currencyAbbreviation);
      form.resetForm();
      this.toastrService.success(success.message, 'Success!');
    }, error => {
      form.resetForm();
      this.toastrService.error(error.json().message, 'Error!');
    })
  }



  // public hasBTC:boolean = false;
  // public hasETH:boolean = false;
  //
  //
  //
  //
  //
  //
  // btcWithdraw(){
  //   this.hasBTC = true;
  //   this.hasETH = false;
  // }
  //
  //
  // ethWithdraw() {
  //    this.hasBTC = false;
  //   this.hasETH = true;
  // }

}
