import { Component, ViewChild } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';
import { DisputeDetailsService } from './disputedetails.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { ToastrService } from 'toastr-ng2';
import { ModalDirective } from 'ngx-bootstrap/modal';


@Component({
  selector: 'disputedetails',
  styleUrls: ['./disputedetails.scss'],
  templateUrl: './disputedetails.html',
  providers: [DisputeDetailsService]
})
export class Disputedetails {
  disputeId: number;
  buyerEmail: any;
  buyerName: any;
  buyerMobileNo: any;
  buyerComment: any;
  sellerEmail: any;
  sellerName: any;
  sellerMobileNo: any;
  sellerComment: any;
  orderId: any;
  pairName: any;
  orderVolume: any;
  orderPrice: any;
  totalPrice: any;
  disputeProof1: any;
  disputeProof2: any;
  disputeStatus: any;
  actionStatus: any;
  commentByAdmin: any;
  @ViewChild('addPopup') public addPopup: ModalDirective;
  constructor(private router: ActivatedRoute,
    private service: DisputeDetailsService,
    private toastrService: ToastrService) {
    this.router.params.subscribe(params => {
      this.disputeId = +params['disputeId'];
    });
    this.getDisputeDetail();
  }

  getDisputeDetail() {
    this.service.getDisputeDetails(this.disputeId).subscribe(success => {
      this.buyerEmail = success.data.disputeRaiser.emailId;
      this.buyerName = success.data.disputeRaiser.firstName + ' ' + success.data.disputeRaisedAgainst.lastName;
      this.buyerMobileNo = success.data.disputeRaiser.mobileNumber;
      this.buyerComment = success.data.commentByDisputeRaiser;
      this.sellerEmail = success.data.disputeRaisedAgainst.emailId;
      this.sellerName = success.data.disputeRaisedAgainst.firstName + ' ' + success.data.disputeRaisedAgainst.lastName;
      this.sellerMobileNo = success.data.disputeRaisedAgainst.mobileNumber;
      this.sellerComment = success.data.commentByDisputeRaisedAgainst;
      this.orderId = success.data.orders.id;
      this.pairName = success.data.orders.pairedCurrency.currencyAbbreviation+"/"+success.data.orders.marketCurrency.currencyAbbreviation;
      this.orderVolume = success.data.orders.lockedVolume;
      this.orderPrice = success.data.orders.price;
      this.totalPrice = this.orderVolume * this.orderPrice;
      this.disputeStatus = success.data.disputeStatus;
      this.disputeProof1 = environment.documentUrl + success.data.firstDocumenForProofToDispute;
      if (success.data.secondDocumenForProofToDispute != null) {
        this.disputeProof2 = environment.documentUrl + success.data.secondDocumenForProofToDispute;
      }
    })
  }

  addPopupOpen(status) {
    this.actionStatus = status;
    this.addPopup.show();
  }
  addPopupClose() {
    this.addPopup.hide();
  }

  changeStatus(form) {
    if (form.invalid) return;
    this.service.changeStatus(this.actionStatus, this.disputeId, this.commentByAdmin).subscribe(success => {
      this.getDisputeDetail();
      this.addPopupClose();
      this.toastrService.success(success.message, "Success!");
    }, error => {
      this.addPopupClose();
      this.toastrService.error(error.json().message, "Error!");
    })
  }

}
