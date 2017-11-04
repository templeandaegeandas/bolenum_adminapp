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
  document0: any;
  document1: any;
  document0Status: String;
  document0Type: String;
  document1Status: String;
  document1Type: String;
  document0VerificationStatus: any;
  document1VerificationStatus: any
  docUrl: String;
  // defaultPicture: String;
  // picture: String = 'assets/img/theme/no-photo.png';
  kycDisapprove = new KycDisapproveEntity();
  kycListLength: any;
  doc0Pdf: boolean = false;
  doc1Pdf: boolean = false;
  @ViewChild('addPopup') public addPopup: ModalDirective;

  constructor(
    private router: ActivatedRoute,
    private userDetailsService: UserDetailsService,
    private toastrService: ToastrService) { }

  ngOnInit() {
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
      // this.kycList = success.data;
      this.kycListLength = success.data.length;
      let dot1 = success.data[0].document.lastIndexOf(".")
      let extension1 = (dot1 == -1) ? "" : success.data[0].document.substring(dot1 + 1);
      let dot2 = success.data[1].document.lastIndexOf(".")
      let extension2 = (dot2 == -1) ? "" : success.data[1].document.substring(dot2 + 1);
      if (extension1 == "pdf") {
        this.doc0Pdf = true;
      }
      // } else {
        this.document0 = this.docUrl + success.data[0].document;
      // }
      this.document0Status = success.data[0].documentStatus;
      this.document0Type = success.data[0].documentType;
      this.document0VerificationStatus = success.data[0].isVerified;
      if (extension2 == "pdf") {
        this.doc1Pdf = true;
      }
      // } else {
        this.document1 = this.docUrl + success.data[1].document;
      // }
      this.document1Status = success.data[1].documentStatus;
      this.document1Type = success.data[1].documentType;
      this.document1VerificationStatus = success.data[1].isVerified;
    }, error => {
    });
  }

  openPdf0() {
    window.open(this.document0, "_blank");
  }

  openPdf1() {
    window.open(this.document1, "_blank");
  }
}
