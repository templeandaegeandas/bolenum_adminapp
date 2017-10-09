import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'addNewPairs',
  styleUrls: ['./addNewPair.scss'],
  templateUrl: './addNewPair.html',
})
export class AddNewPair {

constructor(private router:Router) {}

isClose(){
     this.router.navigate(['/pages/addPair/']);

}
}
