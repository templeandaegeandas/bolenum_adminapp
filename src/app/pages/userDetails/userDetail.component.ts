import { Component, OnInit } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';
import { Router, ActivatedRoute  } from '@angular/router';
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
user = new UserDetailEntity("","","",0);
  constructor(private router: ActivatedRoute, private userDetailsService: UserDetailsService) {

  }

  ngOnInit() {
    this.router.params.subscribe(params => {
       this.userId = +params['userId'];
    });
    this.getUserDetailsById();
  }

  getUserDetailsById() {
    this.userDetailsService.getUsersDetails(this.userId).subscribe(success => {
      this.user = new UserDetailEntity(success.data.firstName,success.data.lastName,success.data.emailId,success.data.mobileNumber);
    },error => {
      console.log(error)
    })
  }

   public defaultPicture = 'assets/img/theme/no-photo.png';
  public profile:any = {
    picture: 'assets/img/app/profile/Nasta.png'
  };
  public uploaderOptions:NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };

  public fileUploaderOptions:NgUploaderOptions = {
    // url: 'http://website.com/upload'
    url: '',
  };
}
