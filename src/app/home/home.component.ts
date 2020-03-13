import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ShopComponentService } from './shop/shop.component.service';
import * as $ from'jquery';
import { AppComponentService } from '../services/app.component.service';
import { GlobalComponent } from '../global/global.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  shop: any;
  services: any;
  sidebar: any;
  slides: any;
  imageUrl: any[];
  loading: boolean;
  constructor(
    private shop_:ShopComponentService,
    private global:GlobalComponent,
    private service_: AppComponentService,
    private http: HttpClient
  ) {
    this.shop_.getShopContent().subscribe(data => {
      this.shop = data;
      // console.log(data);
     });
    this.shop_.getServiceContent().subscribe(data=>{
      this.services = data;
    });
    this.shop_.getSidebarContent().subscribe(data=>{
      this.sidebar = data;
    });
    this.shop_.getSlideContent().subscribe(data=>{
      this.slides = data;
    });
  }

  ngOnInit(): void{
    this.service_.getBannerList().subscribe(res=>{
      this.imageUrl = res;
      this.loading = false; 
      console.log(res);
    });
  }
}
