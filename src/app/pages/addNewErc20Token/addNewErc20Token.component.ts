import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddNewErc20Token, Currency } from './entity/erc20Token';
import { AddNewErcTokenService } from './addNewErc.service';

import { ToastrService } from 'toastr-ng2';




@Component({
  selector: 'addNewErc20Tokens',
  styleUrls: ['./addNewErc.scss'],
  templateUrl: './addNewErc.html',
  providers: [AddNewErcTokenService],
})
export class AddNewErc20TokenComponent {

  ercToken = new AddNewErc20Token();
  currency = new Currency();

  constructor(
    private router: Router,
    private toastrService: ToastrService,
    private addNewErcTokenService: AddNewErcTokenService) { }


  addErcToken(form) {
    if (form.invalid) {
      return;
    }
    this.ercToken.currency = this.currency;
    this.addNewErcTokenService.addNewToken(this.ercToken).subscribe(success => {
      this.router.navigate(['/pages/addErc20']);
      this.toastrService.success(success.message, 'Success!');
    }, error => {
      this.toastrService.error(error.json().message, 'Error!');
    })

  }


}
