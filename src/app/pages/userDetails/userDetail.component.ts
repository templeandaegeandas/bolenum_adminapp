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
  myid: any;
  id: any;
  userKycDoc: any;
  uFName: string;
  userListData: any;
  bankCustomerDetails: any;
  userId: Number;
  user = new UserDetailEntity("", "", "", 0, "", "");
  kycList: any;
  docUrl: String;
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
  }

  getUserDetailsById() {
    this.userDetailsService.getUsersDetails(this.userId).subscribe(success => {
      this.user = new UserDetailEntity(success.data.firstName,
        success.data.lastName,
        success.data.emailId,
        success.data.mobileNumber,
        success.data.country,
        success.data.state,
      );
    }, error => {
      console.log(error)
    });

    this.getKycByUserID(this.userId);
  }

  approveKyc(kycId) {
    this.userDetailsService.approveKyc(kycId).subscribe(success => {
      this.ngOnInit();
    }, error => {
      console.log(error)
    })
  }

  disApproveKyc(disApproveKycForm) {
    if (disApproveKycForm.invalid) return;
    this.userDetailsService.disApproveKyc(this.kycDisapprove).subscribe(success => {
      this.addPopupClose();
      this.ngOnInit();
      this.toastrService.success("Kyc disapproved!", "Success!");
    }, error => {
      this.toastrService.success("Kyc not disapproved! Try again!", "Success!");
    })
  }

  addPopupOpen(kycId) {
    this.kycDisapprove.setId(kycId);
    this.addPopup.show();
  }
  addPopupClose() {
    this.addPopup.hide();
  }

  getBankDetails() {
    this.userDetailsService.getBankDetails(this.userId).subscribe(successData => {
      let userBankData = successData.data;
      this.bankCustomerDetails = userBankData;
    }, errorData => {
    });
  }

  getKycByUserID(userId) {
    this.docUrl = environment.documentUrl;
    this.userDetailsService.getKycByUserId(userId).subscribe(success => {
      console.log(success.data);
      this.kycList = success.data;
      this.kycList[0].document = this.docUrl + success.data[0].document;
      this.kycList[1].document = this.docUrl + success.data[1].document;
    }, error => {
    });
  }
}
