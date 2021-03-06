import { Component, OnInit, ViewChild } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';
import { Router, ActivatedRoute } from '@angular/router';
import { UserDetailsService } from './userDetail.service';
import { UserDetailEntity } from './entity/user.detail';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ToastrService } from 'toastr-ng2';
import { KycDisapproveEntity } from './entity/kyc.disapprove.entity';
import { environment } from '../../../environments/environment';
import { WebsocketService } from '../webSocket/web.socket.service';
import { AppEventEmiterService } from '../../app.event.emmiter.service';

@Component({
  selector: 'userDetail',
  styleUrls: ['./userDetail.scss'],
  templateUrl: './userDetail.html',
  providers: [UserDetailsService, WebsocketService]
})

export class UserDetail implements OnInit {
  kycForm: any;
  disApproveKycForm: any;
  loading: boolean = false;
  bankUserLength: any;
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
  kycDisapprove = new KycDisapproveEntity();
  kycListLength: any;
  doc0Pdf: boolean = false;
  doc1Pdf: boolean = false;
  document0Id: any;
  document1Id: any;
  orderBook;
  tradeHistory;
  start;
  end;
  totalElements;
  currentPage;
  pageSize;
  @ViewChild('addPopup') public addPopup: ModalDirective;

  constructor(
    private router: ActivatedRoute,
    private userDetailsService: UserDetailsService,
    private toastrService: ToastrService,
    private websocketService: WebsocketService,
    private appEventEmiterService: AppEventEmiterService) {
    appEventEmiterService.currentMessage.subscribe(message => {
      if (message == 'DOCUMENT_VERIFICATION') {
        this.getKycByUserID(this.userId);
      }
    })
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.userId = +params['userId'];
    });
    this.getUserDetailsById();
    this.getKycByUserID(this.userId);
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
  }

  approve0Kyc() {
    this.loading = true;
    this.userDetailsService.approveKyc(this.document0Id).subscribe(success => {
      this.ngOnInit();
      setTimeout(()=>{
        this.loading = false;
      },2000);
      
      this.toastrService.success(success.message, 'Success!');
      this.websocketService.sendMessage(this.userId, 'DOCUMENT_VERIFICATION');
    }, error => {
      console.log(error)
      this.loading = false;
    })
  }

  approve1Kyc() {
    this.loading = true;
    this.userDetailsService.approveKyc(this.document1Id).subscribe(success => {
      this.ngOnInit();
      setTimeout(()=>{
        this.loading = false;
      },2000);
      this.toastrService.success(success.message, 'Success!');
      this.websocketService.sendMessage(this.userId, 'DOCUMENT_VERIFICATION');
    }, error => {
      console.log(error);
        this.loading = false;
    })
  }

  disApproveKyc(disApproveKycForm) {
    this.kycForm = disApproveKycForm;
    this.loading = true;
    if (disApproveKycForm.invalid) {
      this.loading = false;
      return;
    }
    this.userDetailsService.disApproveKyc(this.kycDisapprove).subscribe(success => {
      this.addPopupClose();
      this.ngOnInit();
      this.loading = false;
      this.toastrService.success(success.message, 'Success!');
      this.websocketService.sendMessage(this.userId, 'DOCUMENT_VERIFICATION');
      disApproveKycForm.resetForm();
    }, error => {
      this.toastrService.error('Kyc not disapproved! Try again!', 'Success!');
    })
  }

  addPopupOpen(documentType) {
    if (documentType == this.document0Type) {
      this.kycDisapprove.setId(this.document0Id);
    } else {
      this.kycDisapprove.setId(this.document1Id);
    }
    this.addPopup.show();
  }

  addPopupClose() {
    this.kycForm.resetForm();
    this.addPopup.hide();
  }

  getBankDetails() {
    this.userDetailsService.getBankDetails(this.userId).subscribe(successData => {
      let userBankData = successData.data;
      this.bankCustomerDetails = userBankData;
      this.bankUserLength = userBankData.length;
      console.log('bank details length >>>>>', this.bankUserLength);

    }, errorData => {
    });
  }

  getKycByUserID(userId) {
    this.docUrl = environment.documentUrl;
    this.userDetailsService.getKycByUserId(userId).subscribe(success => {
      this.kycListLength = success.data.length;
      console.log("kyc length",this.kycListLength);
      
      if (this.kycListLength > 0) {
        let dot1 = success.data[0].document.lastIndexOf(".")
        let extension1 = (dot1 == -1) ? "" : success.data[0].document.substring(dot1 + 1);
        let dot2 = success.data[1].document.lastIndexOf(".")
        let extension2 = (dot2 == -1) ? "" : success.data[1].document.substring(dot2 + 1);
        if (extension1 == 'pdf') {
          this.doc0Pdf = true;
        }
        this.document0Id = success.data[0].id;
        this.document0 = this.docUrl + success.data[0].document + "?decache=" + Math.random();
        this.document0Status = success.data[0].documentStatus;
        this.document0Type = success.data[0].documentType;
        this.document0VerificationStatus = success.data[0].isVerified;
        if (extension2 == 'pdf') {
          this.doc1Pdf = true;
        }
        this.document1Id = success.data[1].id;
        this.document1 = this.docUrl + success.data[1].document + "?decache=" + Math.random();
        this.document1Status = success.data[1].documentStatus;
        this.document1Type = success.data[1].documentType;
        this.document1VerificationStatus = success.data[1].isVerified;
      }
    }, error => {
      console.log(error);
    });
  }

  openPdf0() {
    window.open(this.document0, '_blank');
  }

  openPdf1() {
    window.open(this.document1, '_blank');
  }

  getOrderBook() {
    this.userDetailsService.getOrderBookByUserId(this.currentPage, this.pageSize, this.userId).subscribe(success => {
      this.orderBook = success.data.content;
      this.totalElements = success.data.totalElements;
      this.start = (this.currentPage - 1) * this.pageSize + 1;
      this.end = (this.currentPage - 1) * this.pageSize + success.data.numberOfElements;
    })
  }

  getTradeHistory() {
    this.userDetailsService.getTradeHistoryByUserId(this.currentPage, this.pageSize, this.userId).subscribe(success => {
      this.tradeHistory = success.data.content;
      this.totalElements = success.data.totalElements;
      this.start = (this.currentPage - 1) * this.pageSize + 1;
      this.end = (this.currentPage - 1) * this.pageSize + success.data.numberOfElements;
    })
  }

  onTabChange(event) {
    if (event.index === 1) {
      this.getKycByUserID(this.userId);
    }
    else if (event.index === 2) {
      this.currentPage = 1;
      this.pageSize = 10;
      this.getOrderBook()
    }
    else if (event.index === 3) {
      this.currentPage = 1;
      this.pageSize = 10;
      this.getTradeHistory();
    }
    else if (event.index === 4) {
      this.getBankDetails();
    }
    else {
      this.getUserDetailsById();
    }
  }

  pageChanged($event) {
    this.currentPage = $event;
    this.getOrderBook();
  }

  pageChangedTrade($event) {
    this.currentPage = $event;
    this.getTradeHistory();
  }

}
