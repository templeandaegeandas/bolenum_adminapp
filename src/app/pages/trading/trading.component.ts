import { Component } from '@angular/core';
import { TradingService } from './trading.service';
import { Trading } from './entity/trading';
import { ToastrService } from 'toastr-ng2';

@Component({
  selector: ' Trading_fees ' ,
  templateUrl: './trading.html',
  styleUrls: [('./trading.scss')],
  providers: [TradingService],
})

export class TradingFees {
  currency: any;
  trading = new Trading();
  index: any;

  constructor(
    private tradingService: TradingService,
    private toastrService: ToastrService) {
      this.getMinWithdrawLimit();

  }

  setTradingFees(form) {
    if (form.invalid) {
      return;
    }
      this.tradingService.setTradingFees(this.trading).subscribe(success => {
      this.toastrService.success('Fee saved successfully!', 'Success');
    });
  }

getMinWithdrawLimit() {
    this.tradingService.getTradingFees().subscribe(success => {
      this.trading.fee = 0;
      if (success.data != null) {
        if (success.data.fee != null) {
          this.trading.fee = success.data.fee;
        }
        if (success.data.fee != null) {
          this.trading.fee = success.data.fee;
        }
      }
    });
  }

}
