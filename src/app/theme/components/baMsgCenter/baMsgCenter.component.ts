import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BaMsgCenterService } from "./baMsgCenter.service";
import { environment } from "../../../../environments/environment";
import { AppEventEmiterService } from "../../../app.event.emmiter.service";
import { WebsocketService } from "../../../pages/webSocket/web.socket.service";

@Component({
  selector: "ba-msg-center",
  styleUrls: ["./baMsgCenter.scss"],
  templateUrl: "./baMsgCenter.html",
  providers: [BaMsgCenterService, WebsocketService]
})
export class BaMsgCenter implements OnInit {
  isLoading: any;
  hasBlur: any;
  listOfUserNotification: any;
  listOfUserNotificationLength: any;
  beforeLogin: boolean = true;
  afterLogin: boolean = false;
  jsonMessage: any;
  countOfUnseeNotification: any;
  arrayOfNotification: any;
  isSelected = false;

  constructor(
    private baMsgCenterService: BaMsgCenterService,
    private websocketService: WebsocketService,
    private router: Router,
    private appEventEmiterService: AppEventEmiterService
  ) {
    this.isLogIn();
    this.isSelected = false;
    if (this.beforeLogin) {
      websocketService.connectForNonLoggedInUser();
    }
    this.appEventEmiterService.currentMessage.subscribe(message => {
      this.jsonMessage = message;
      if (
        message == "DOCUMENT_VERIFICATION" ||
        message == "DISPUTE_NOTIFICATION" ||
        message == "ADMIN_NOTIFICATION"
      ) {
        this.getAllUserNotifications();
        this.getCountOfUnseeNotification();
        this.isSelected = false;
      }
    });
  }

  ngOnInit() {
    this.websocketService.connectForLoggedInUser(
      localStorage.getItem("userId")
    );
    this.getAllUserNotifications();
    this.getCountOfUnseeNotification();
    this.isSelected = false;
  }

  getAllUserNotifications() {
    this.isLoading = true;
    this.hasBlur = true;
    this.baMsgCenterService
      .GetUserNotification(1, 5, "createdOn", "desc")
      .subscribe(
        success => {
          this.isLoading = false;
          this.hasBlur = false;
          this.listOfUserNotification = success.data.content;
          this.listOfUserNotificationLength = this.listOfUserNotification.length;
        },
        error => {
          console.log(error);
        }
      );
  }

  isLogIn() {
    if (localStorage.getItem("token") == null) {
      return;
    } else {
      this.beforeLogin = false;
      this.afterLogin = true;
    }
  }

  getCountOfUnseeNotification() {
    this.baMsgCenterService.getTotalOfUnseeNotification().subscribe(success => {
      this.isLoading = false;
      this.hasBlur = false;
      this.countOfUnseeNotification = success.data;
    });
  }

  changeStatusOfUserNotification() {
    if (!this.isSelected) {
      let arrayOfNotification = [];
      for (var i = 0; i < this.listOfUserNotification.length; i++) {
        arrayOfNotification[i] = this.listOfUserNotification[i].id;
      }
      console.log(arrayOfNotification);

      this.baMsgCenterService
        .changeReadStatusOfUserNotification(arrayOfNotification)
        .subscribe(success => {
          console.log("hihihih");
          this.isLoading = false;
          this.hasBlur = false;
          this.getCountOfUnseeNotification();
          this.isSelected = true;
        });
    }
  }
}
