import { Component, OnInit} from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "toastr-ng2";
import { NotificationDetailsService } from "./notificationDetails.service";

@Component({
  selector: "notificationDetails",
  styleUrls: ["./notificationDetails.scss"],
  templateUrl: "./notificationDetails.html",
  providers: [NotificationDetailsService]
})
export class NotificationDetailsComponent implements OnInit{

  public userNotification: any;
  messagedata:any;

  constructor(

    private _notificationDetailsService : NotificationDetailsService,

  ){}

  ngOnInit(){
this.getNotificationDetails();
  }

  getNotificationDetails(){
    this._notificationDetailsService.getNotificationDetails(1, 5, "createdOn", "desc").subscribe( success =>{

      this.userNotification = success.data.content;
       this.messagedata =  this.userNotification;
      console.log("user>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",this.messagedata);
      
      

    },error =>{

    })

  }
  
}
