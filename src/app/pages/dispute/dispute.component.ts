import { Component } from '@angular/core';
import { DisputeService } from './dispute.service';
import { Router } from '@angular/router';


@Component({
  selector: 'dispute',
  styleUrls: [('./dispute.scss')],
  templateUrl: './dispute.html',
  providers: [DisputeService],
})
export class Dispute {

  data;
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "email";
    sortOrder = "asc";

    constructor(private service: DisputeService, private router: Router) {
    this.service.getData().then((data) => {
      this.data = data;
    });
  }
  
     toInt(num: string) {
        return +num;
    }

    sortByWordLength = (a: any) => {
        return a.city.length;
    }
    navigaeToDisputedetails()
{
    this.router.navigate(['/pages/dispute/details'])
}
 
}
