import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "toastr-ng2";
import { AvailableBalanceService } from "./availableBalance.service";

@Component({
  selector: "availableBalance",
  styleUrls: ["./availableBalance.scss"],
  templateUrl: "./availableBalance.html",
  providers: [AvailableBalanceService]
})
export class AvailableBalanceComponent {
  isLoadTrue: boolean = true;
  isLoading: boolean = false;
  currencyData: any;
  setItemValue: any;
  walletAddress: string;
  balance: any;
  coinAbbreviation: any;
  toAddress: any;
  withdrawAmount: any;
  isDisable: boolean = false;
  hasCopied: boolean = false;
  tradeFee: any;
  deposit: any;
  transferFee: any;

  constructor(
    private availableBalanceService: AvailableBalanceService,
    private toastrService: ToastrService
  ) {
    this.getCurrencyList();
  }

  getCurrencyList() {
    this.availableBalanceService.getCurrencyList().subscribe(
      success => {
        this.currencyData = success.data;
        if (this.currencyData.length > 0) {
          this.setItemValue = this.currencyData[0].currencyAbbreviation;
          this.getBalance(this.setItemValue);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getBalance(data) {
    this.isDisable = true;
    this.isLoading = true;
    this.isLoadTrue = false;

    let c = this.currencyData.find(x => x.currencyAbbreviation == data);
    this.availableBalanceService.getCoin(c.currencyType, data).subscribe(
      success => {
        this.isLoading = false;
        this.isLoadTrue = true;
        this.isDisable = false;
        let successData = success.data;
        if (successData.data != null) {
          this.walletAddress = successData.data.address;
          this.balance = successData.data.balance;
        }
      },
      errorData => {
        console.log(errorData);
      }
    );
  }

  withdraw(form) {
    if (form.invalid) return;
    let c = this.currencyData.find(
      x => x.currencyAbbreviation == this.setItemValue
    );
    this.availableBalanceService
      .withdrawFromWallet(c.currencyType, c.currencyAbbreviation, {
        withdrawAmount: this.withdrawAmount,
        toAddress: this.toAddress
      })
      .subscribe(
        success => {
          this.getBalance(c.currencyAbbreviation);
          form.resetForm();
          this.toastrService.success(success.message, "Success!");
        },
        error => {
          form.resetForm();
          this.toastrService.error(error.json().message, "Error!");
        }
      );
  }

  addressCopied() {
    this.hasCopied = true;
    setTimeout(() => {
      this.hasCopied = false;
    }, 1000);
  }
}
