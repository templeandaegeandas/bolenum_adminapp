import { Component, OnInit, ViewChild } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDetailsService } from '../userDetails/userDetail.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ToastrService } from 'toastr-ng2';
import { KycDisapproveEntity } from './entity/kyc.disapprove.entity';
import { environment } from '../../../environments/environment';


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
  kycDisapprove = new KycDisapproveEntity();
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
  }

  getUserDetailsById() {
    this.userDetailsService.getUsersDetails(this.userId).subscribe(success => {
      this.document = success.data.userKyc.document;
      this.documentStatus = success.data.userKyc.documentStatus;
      this.isVerified = success.data.userKyc.isVerified;
      this.documentType = success.data.userKyc.documentType;
      this.picture = environment.documentUrl + this.document;
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

}
