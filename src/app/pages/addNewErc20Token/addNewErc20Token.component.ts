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

  ercToken = new AddNewErc20Token();

  constructor(private router: Router, private addNewErcTokenService: AddNewErcTokenService) { }


  addErcToken() {
    console.log("add new erc token>>>>>>>>>>>>>>>>>>>>>>");
    this.addNewErcTokenService.addNewToken(this.ercToken).subscribe(success => {
      console.log(success);
    }, error => {
      console.log(error);
    })

  }


}
