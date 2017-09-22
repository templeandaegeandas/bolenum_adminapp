import { Component, OnInit } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDetailsService } from '../userDetails/userDetail.service';


@Component({
  selector: 'KycDetails',
  styleUrls: ['./kycDetails.scss'],
  templateUrl: './kycDetails.html',
  providers: [UserDetailsService]
})
export class KycDetails implements OnInit {
  userId: Number;
  document: String;
  documentStatus: String;
  isVerified: Boolean;
  documentType: String;
  defaultPicture = 'assets/img/theme/no-photo.png';
  picture: String;
  constructor(private router: ActivatedRoute, private userDetailsService: UserDetailsService) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.userId = +params['userId'];
    });
    this.getUserDetailsById();
  }

  getUserDetailsById() {
    this.userDetailsService.getUsersDetails(this.userId).subscribe(success => {
      this.document = success.data.userKyc.document;
      this.documentStatus = success.data.userKyc.documentStatus;
      this.isVerified = success.data.userKyc.isVerified;
      this.documentType = success.data.userKyc.documentType;
      this.picture = 'http://localhost:3050/static/' + this.document;
      this.defaultPicture = 'assets/img/theme/no-photo.png';
    }, error => {
      console.log(error)
    })
  }

  approveKyc() {
    this.userDetailsService.approveKyc(this.userId).subscribe(success => {
      this.ngOnInit();
    }, error => {
      console.log(error)
    })
  }

}
