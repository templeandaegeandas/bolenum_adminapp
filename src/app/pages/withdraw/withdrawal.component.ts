import { Component } from '@angular/core';
import { WithdrawService } from './withdrawal.service';
import { Withdraw } from './entity/withdraw';
import { ToastrService } from 'toastr-ng2';

@Component({
  selector: ' WithDraw_fees',
  templateUrl: './withdrawal.html',
  styleUrls: [('./withdrawal.scss')],
  providers: [WithdrawService]
})

export class WithdrawalFees {
  currency: any;
  currencyList: any;
  currencyId: any;
  withdraw = new Withdraw();
  index: any;
  constructor(
    private withdrawService: WithdrawService,
    private toastrService: ToastrService) {
    this.currenciesList();
  }

  currenciesList() {
    this.withdrawService.getCurrencyList().subscribe(success => {
      this.currencyList = success.data;
      this.currencyId = this.currencyList[0].currencyId;
      this.currency = this.currencyList[0].currencyId;
      this.getMinWithdrawLimit();
    })
  }

  setMinWithdrawLimit(form) {
    if (form.invalid) {
      return;
    }
    const c = this.currencyList.find(x => x.currencyId == this.currency);
    if (c == null || c == 'undefined') {
      return;
    }
    this.withdraw.currency = c;
    this.withdrawService.setMinWithdrawLimit(this.withdraw).subscribe(success => {
      this.getMinWithdrawLimit();
      this.toastrService.success('Limit saved successfully!', 'Success');
    });
  }

  getMinWithdrawLimit() {
    const c = this.currencyList.find(x => x.currencyId == this.currencyId);
    this.withdrawService.getMinWithdrawLimit(c.currencyId).subscribe(success => {
      this.withdraw.minWithDrawAmount = 0;
      if (success.data != null) {
        this.withdraw.minWithDrawAmount = success.data.minWithDrawAmount;
      }
    });
  }

  changeCurrency(currencyId) {
    this.currencyId = currencyId;
    this.getMinWithdrawLimit();
  }

}
