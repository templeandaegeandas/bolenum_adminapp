import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'toastr-ng2';
import { RouterModule, Routes, Router } from '@angular/router';

import { LoginService } from './login.service';
import { Login } from './entity/login';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  providers: [LoginService]
})
export class LoginComponent {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;
  login = new Login("", "");

  constructor(fb: FormBuilder, private loginService: LoginService, private toastrService: ToastrService, private router: Router) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
    }
  }

  loginUser(form) {
    console.log(form);
    if (form.invalid) {
      return;
    }
    this.loginService.logIn(this.login).subscribe(success => {
      localStorage.setItem("token", success.data.token);
      this.toastrService.success(success.message, 'Success!');
      this.router.navigate(['dashboard']);
    }, error => {
      this.toastrService.error(error.json().message, 'Error!');
    })
  }

}
