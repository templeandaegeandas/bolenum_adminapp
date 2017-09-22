import { Component, OnInit } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDetailsService } from './userDetail.service';
import { UserDetailEntity } from './entity/user.detail';

@Component({
  selector: 'userDetail',
  styleUrls: ['./userDetail.scss'],
  templateUrl: './userDetail.html',
  providers: [UserDetailsService]
})

export class UserDetail implements OnInit {
  userId: Number;
  user = new UserDetailEntity("", "", "", 0);
  document: String;
  documentStatus: String;
  isVerified: Boolean;
  documentType: String;
  defaultPicture: String;
  picture: String
  constructor(private router: ActivatedRoute, private userDetailsService: UserDetailsService) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.userId = +params['userId'];
    });
    this.getUserDetailsById();
  }

  getUserDetailsById() {
    this.userDetailsService.getUsersDetails(this.userId).subscribe(success => {
      if (success.data.userKyc !== null) {
        this.document = success.data.userKyc.document;
        this.documentStatus = success.data.userKyc.documentStatus;
        this.isVerified = success.data.userKyc.isVerified;
        this.documentType = success.data.userKyc.documentType;
        this.picture = 'http://localhost:3050/static/' + this.document;
      }

      this.user = new UserDetailEntity(success.data.firstName,
        success.data.lastName,
        success.data.emailId,
        success.data.mobileNumber
      );
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

  //  public defaultPicture = 'assets/img/theme/no-photo.png';
  // public
  // public uploaderOptions:NgUploaderOptions = {
  //   // url: 'http://website.com/upload'
  //   url: '',
  // };
  //
  // public fileUploaderOptions:NgUploaderOptions = {
  //   // url: 'http://website.com/upload'
  //   url: '',
  // };
}
