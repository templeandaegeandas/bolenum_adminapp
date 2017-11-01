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
  kycList: any;
  docUrl: String;
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
    this.getKycByUserID(this.userId);
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

}
