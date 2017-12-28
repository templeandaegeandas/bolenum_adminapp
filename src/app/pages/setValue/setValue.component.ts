import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'toastr-ng2';
import { SetValueService } from './setValue.service';

declare var $: any;


@Component({
  selector: 'setvalue',
  styleUrls: ['./setValue.scss'],
  templateUrl: './setValue.html',
  providers: [SetValueService]
})
export class SetValueComponent {
  priceBLNUSD: any;
  priceUSDNGN: any;
  priceBLNNGN: any;
  constructor(private setValueService: SetValueService, private toastrService: ToastrService) {
    this.getBLNUSD()
  }

  getBLNUSD() {
    $.ajax({
      url: 'https://api.coinmarketcap.com/v1/ticker/?start=0&limit=800&callback=?',
      type: 'GET',
      success: resp => {
        const c = resp.find(x => x.symbol == 'BLN')
        this.priceBLNUSD = c.price_usd;
        this.getUSDNGN();
      },
      error: e => {
        console.log(e)
      }
    });
  }

  getUSDNGN() {
    $.ajax({
      url: 'http://apilayer.net/api/live?access_key=bc4d260fc6160963f88cca23c6e5f081&currencies=NGN&source=USD&format=1',
      type: 'GET',
      success: resp => {
        this.priceUSDNGN = resp.quotes.USDNGN;
        this.priceBLNNGN = this.priceBLNUSD * this.priceUSDNGN;
      },
      error: e => {
        console.log(e)
      }
    });
  }

  setBLNNGN(form) {
    if (form.invalid) {
      return;
    }
    this.setValueService.setBLNNGN(this.priceBLNNGN).subscribe(success => {
      this.toastrService.success(success.message, 'Success!')
    }, error => {
      this.toastrService.error(error.json().message, 'Error!')
    })
  }

}
