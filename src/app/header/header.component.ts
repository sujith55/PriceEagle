import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';
import { Observable } from 'rxjs';

import { AppComponentService } from '../services/app.component.service';
import { ShopComponentService } from '../home/shop/shop.component.service';

// import swal from 'sweetalert';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public language: Observable<any[]>;
  public langs: Observable<any[]>;

  userlogin = { email: '', password: '', mobile: '' };
  registerUser = { name:"", mobile:"", email:"", lang:"", password:"" }
  otpData = {email:"", mobile:"", otp:""}
  forgotPassword = { email: '', mobile: '', otp:'', password:'' };
  submitReg: boolean = false;
  otpSent: boolean = false;
  otpstatus: any;
  Otpmessage: any;
  constructor(private http: HttpClient, private router: ActivatedRoute, private service:AppComponentService, private shop: ShopComponentService) { }

  ngOnInit(): void{
    this.service.getLanguages().subscribe(res=>{
      this.language = res['data'] as Observable<any[]>
    });
    this.shop.getLangs().subscribe(res=>{
      this.langs = res;
    });
  }

  submitForm(data:any){
    this.service.userLogin(data.value).subscribe(res=>{
      if (res.status === "0000") {
        sessionStorage.setItem("name",res['data']['name']);
        sessionStorage.setItem("user", res['api_Key']);
        sessionStorage.setItem("id", res['data']['userId']);
        sessionStorage.setItem("email", res['data']['email']);
        Swal.fire({
          text: '' + res.mesg,
          icon:"success"
        }).then(() => {
          location.href = location.origin;
        });
        // .then(()=>{
        //   location.href=location.origin;
        //  });
      } else {
        Swal.fire({
          text: '' + JSON.stringify(res['mesg']),
          icon:"error"
        }).then(() => {
          data.resetForm({});
        });
      }
    });
  }
  onSubmit(registerForm:any){
    console.log(registerForm.value);
     this.service.userRegister(registerForm.value).subscribe(res=>{
      if (res["status"] == "1033") {
        this.submitReg = true;
        Swal.fire({
            text: '' + JSON.stringify(res['mesg']),
            icon:"success"
        }
        ).then(() => {
          // window.location.reload();
        });
      } else {
        this.submitReg = false;
        Swal.fire("sorry..", "" + JSON.stringify(res["mesg"]), "error");
      }
    });
  }
  verify(data:any){
  console.log(data.value);
  this.service.registerOTP(data.value).subscribe(res=>{
    if (res.status == "0000") {
      sessionStorage.setItem("name", res['data']['name']);
      sessionStorage.setItem("user", res['api_Key']);
      sessionStorage.setItem("id", res['data']['userId']);
      sessionStorage.setItem("email", res['data']['email']);
      Swal.fire({
        text:"OTP Verification is Successfull",
        icon:"success"
      }).then(() => {
        // location.href = location.origin;
      });
    } else if (res.status == "1029") {
      Swal.fire("sorry..", "" + JSON.stringify(res["mesg"]), "error");
    } else {
      Swal.fire("sorry..", "" + JSON.stringify(res["mesg"]), "error");
    }
  });
  }
  forgotP(data:any){
    this.service.userForgotPass(data.value).subscribe(res=>{
      this.otpstatus = res.status;
       // $("#myModal").modal('hide');
       if (this.otpstatus == "0000") {
        this.Otpmessage = res.data;
        console.log(this.Otpmessage);
      } else if (this.otpstatus == "1000") {
        Swal.fire(
          'sorry..',
          '' + JSON.stringify(res['mesg']),
          'error'
        )
      } else {
        Swal.fire(
          'sorry..',
          '' + JSON.stringify(res['mesg']),
          'error'
        )
      }
    });
    // console.log(data.value)
  }
  newpassword(data:any){
    // console.log(data.value);
    this.service.NewPassword(data.value).subscribe(res=>{
      if (res.status == "1031") {
        Swal.fire({
          text: '' + res.mesg,
          icon: 'success'
        }).then(() => {
          // location.href = "./user-login/login/user-login.htm";
        });
      } else if (res.status == "1029") {
        Swal.fire(
          'sorry..',
          '' + JSON.stringify(res['mesg']),
          'error'
        )
      } else {
        Swal.fire(
          'sorry..',
          '' + JSON.stringify(res['mesg']),
          'error'
        )
      }
    });
  }
  lang_select(lang){
    console.log(lang);
  }
}
