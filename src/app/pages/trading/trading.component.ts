import { Component } from '@angular/core';
import { TradingService } from './trading.service';
import { Trading } from './entity/trading';
import { ToastrService } from 'toastr-ng2';

@Component({
  selector: ' Trading_fees' ,
  templateUrl: './trading.html',
  styleUrls: [('./trading.scss')],
  providers: [TradingService],
})

export class TradingFees {
  
}
