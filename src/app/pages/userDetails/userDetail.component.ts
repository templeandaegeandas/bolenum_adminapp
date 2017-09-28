import { Component, OnInit, ViewChild } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDetailsService } from './userDetail.service';
import { UserDetailEntity } from './entity/user.detail';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ToastrService } from 'toastr-ng2';
import { KycDisapproveEntity } from './entity/kyc.disapprove.entity';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'userDetail',
  styleUrls: ['./userDetail.scss'],
  templateUrl: './userDetail.html',
  providers: [UserDetailsService]
})

export class UserDetail implements OnInit {
  bankCustomerDetails:any;
  userId: Number;
  user = new UserDetailEntity("", "", "", 0);
  document: String;
  documentStatus: String;
  isVerified: Boolean;
  documentType: String;
  defaultPicture: String;
  picture: String = 'assets/img/theme/no-photo.png';
  kycDisapprove = new KycDisapproveEntity();
  @ViewChild('addPopup') public addPopup: ModalDirective;

  constructor(
    private router: ActivatedRoute,
    private userDetailsService: UserDetailsService,
    private toastrService: ToastrService) { }

  ngOnInit() {
    console.log(environment)
    this.router.params.subscribe(params => {
      this.userId = +params['userId'];
    });
    this.getUserDetailsById();
    this.getBankDetails();
    console.log("useriddddddddddddddd",this.userId);
  }

  getUserDetailsById() {
    this.userDetailsService.getUsersDetails(this.userId).subscribe(success => {
      if (success.data.userKyc !== null) {
        this.document = success.data.userKyc.document;
        this.documentStatus = success.data.userKyc.documentStatus;
        this.isVerified = success.data.userKyc.isVerified;
        this.documentType = success.data.userKyc.documentType;
        if (this.document != null) {
          this.picture = environment.documentUrl + this.document;
        }
      }
      this.user = new UserDetailEntity(success.data.firstName,
        success.data.lastName,
        success.data.emailId,
        success.data.mobileNumber
      );
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

  disApproveKyc(disApproveKycForm) {
    if(disApproveKycForm.invalid) return;
    this.kycDisapprove.setUserId(this.userId);
    this.userDetailsService.disApproveKyc(this.kycDisapprove).subscribe(success => {
      this.addPopupClose();
      this.ngOnInit();
      this.toastrService.success("Kyc disapproved!","Success!");
    }, error => {
      this.toastrService.success("Kyc not disapproved! Try again!","Success!");
    })
  }

  addPopupOpen() {
    this.addPopup.show();
  }
  addPopupClose() {
    this.addPopup.hide();
  }

  getBankDetails( ) {
    this.userDetailsService.getBankDetails(this.userId).subscribe(successData => {
      let userBankData = successData.data;
      this.bankCustomerDetails = userBankData;
      console.log("userdata >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>", this.bankCustomerDetails);
      
   

    }, errorData => {

    })

 
    
  }
}
