import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { addNewErc20Token } from './entity/erc20Token';
import { AddNewErcTokenService } from './addNewErc.service';




@Component({
  selector: 'addNewErc20Tokens',
  styleUrls: ['./addNewErc.scss'],
  templateUrl: './addNewErc.html',
  providers:[AddNewErcTokenService],
})
export class AddNewErc20Token {

constructor(private router:Router , private addnewerctoken:AddNewErcTokenService) {}


addErcToken(){
  console.log("add new erc token>>>>>>>>>>>>>>>>>>>>>>");
  
}


}
