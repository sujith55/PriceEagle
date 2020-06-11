import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';
import { Observable } from 'rxjs';

import { AppComponentService } from '../services/app.component.service';
import { ShopComponentService } from '../home/shop/shop.component.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  userDetails: any;
  userInfo: any;

  constructor(private http: HttpClient, private route_:Router ,private router: ActivatedRoute, private service:AppComponentService, private shop: ShopComponentService) {

  }

  ngOnInit() {
    this.user = sessionStorage.getItem('user');
    this.service.getUserDetails(this.user).subscribe(res=>{
      // this.userDetails = res;
      this.userInfo = res['data'][0];
      console.log('details:'+JSON.stringify(this.userInfo));
    });
  }
  logOut(){
    sessionStorage.clear();
    location.href='/shop';
  }

}
