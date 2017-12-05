import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'toastr-ng2';




@Component({
  selector: 'availableBalance',
  styleUrls: ['./availableBalance.scss'],
  templateUrl: './availableBalance.html',
})
export class AvailableBalanceComponent {

  public hasBTC:boolean = false;
  public hasETH:boolean = false;






  btcWithdraw(){
    this.hasBTC = true;
    this.hasETH = false;
  }


  ethWithdraw() {
     this.hasBTC = false;
    this.hasETH = true;
  }

  }
