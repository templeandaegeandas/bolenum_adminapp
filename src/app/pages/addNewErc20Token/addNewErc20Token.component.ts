import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddNewErc20Token } from './entity/erc20Token';
import { AddNewErcTokenService } from './addNewErc.service';




@Component({
  selector: 'addNewErc20Tokens',
  styleUrls: ['./addNewErc.scss'],
  templateUrl: './addNewErc.html',
  providers: [AddNewErcTokenService],
})
export class AddNewErc20TokenComponent {

  currencyName: String;
  currencyAbbreviation: String;
  ercToken = new AddNewErc20Token();

  constructor(private router: Router, private addNewErcTokenService: AddNewErcTokenService) { }


  addErcToken(form) {
    if(form.invalid) return;
    this.ercToken.currency.currencyName = this.currencyName;
    this.ercToken.currency.currencyAbbreviation = this.currencyAbbreviation;
    console.log("add new erc token>>>>>>>>>>>>>>>>>>>>>>");
    this.addNewErcTokenService.addNewToken(this.ercToken).subscribe(success => {
      console.log(success);
    }, error => {
      console.log(error);
    })

  }


}
