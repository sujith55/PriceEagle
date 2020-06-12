import { Component, OnInit } from '@angular/core';
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
  circle: any;
  men: any;
  women: any;
  kids: any;
  infants: any;
  constructor(
    private shop_:ShopComponentService,
    public global:GlobalComponent,
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
    this.shop_.getFashion().subscribe(data=>{
      this.men = data[0];
      this.women = data[1];
      this.kids = data[2];
      this.infants = data[3];
    });
  }

  ngOnInit(): void{
    $("html, body").animate({ scrollTop: 0 }, "slow");
    this.service_.getBannerList().subscribe(res=>{
      this.imageUrl = res;
      this.loading = false;
      // console.log(res);
    });
    this.service_.getBudget().subscribe(res=>{
      this.circle = res;
      // console.log('data is:' + JSON.stringify(this.circle));
    });

  }
}
