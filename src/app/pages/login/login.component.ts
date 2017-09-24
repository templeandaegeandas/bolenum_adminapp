import { Component } from '@angular/core';
import { ToastrService } from 'toastr-ng2';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { Ng2DeviceService } from 'ng2-device-detector';

import { LoginService } from './login.service';
import { Login } from './entity/login';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  providers: [LoginService]
})
export class LoginComponent {

  submitted: boolean = false;
  login = new Login('', '');
  returnUrl: String;
  ip: String;
  deviceInfo: any;
  constructor(
    private loginService: LoginService,
    private toastrService: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private deviceService: Ng2DeviceService) {

    this.activatedRoute
      .queryParams
      .subscribe(params => {
        this.returnUrl = params['returnUrl'];
      });
    if (this.returnUrl == null || this.returnUrl == 'undefined' || this.returnUrl == '') {
      this.returnUrl = '/pages/dashboard';
    }
    this.loginService.getUserIpAddress().subscribe(success => {
      this.ip = success.ip;
    });
    // this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/pages/dashboard';
  }

  loginUser(form) {
    if (form.invalid) {
      return;
    }
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.login.setIpAddress(this.ip);
    this.login.setBrowserName(this.deviceInfo.browser);
    this.login.setClientOsName(this.deviceInfo.os);
    this.login.setRole('ROLE_ADMIN');
    this.loginService.logIn(this.login).subscribe(success => {
      localStorage.setItem('token', success.data.token);
      this.router.navigate([this.returnUrl]);
    }, error => {
      this.toastrService.error(error.json().message, 'Error!');
    })
  }

}
