import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ShopComponentService } from './shop/shop.component.service';
import * as $ from'jquery';
import { AppComponentService } from '../services/app.component.service';
import { GlobalComponent } from '../global/global.component';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    loop:true,
    // autoplay: true,
    slidesPerView: 10
  };
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
    this.banner();
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
    this.banner();
    this.service_.getBannerList().subscribe(res=>{
      this.imageUrl = res;
      this.loading = false; 
      console.log(res);
    });
  }
  banner(){
    // --------------------------------------Main Promotional banner----------------------------------//
    var slideCount = $("#slider ul li").length;
    var slideWidth = $("#slider ul li").width();
    var slideHeight = $("#slider ul li").height();
    var sliderUlWidth = slideCount * slideWidth;

    $("#slider").css({ width: slideWidth, height: slideHeight });
    $("#slider ul").css({ width: sliderUlWidth, marginLeft: -slideWidth });
    $("#slider ul li:last-child").prependTo("#slider ul");
    function moveLeft() {
      $("#slider ul").animate(
        {
          left: +slideWidth
        },
        400,
        function() {
          $("#slider ul li:last-child").prependTo("#slider ul");
          $("#slider ul").css("left", "");  
        }
      );
    }

    function moveRight() {
      $("#slider ul").animate(
        {
          left: -slideWidth
        },
        400,
        function() {
          $("#slider ul li:first-child").appendTo("#slider ul");
          $("#slider ul").css("left", "");
        }
      );
    }

    $("a.control_prev").click(function() {
      moveLeft();
    });

    $("a.control_next").click(function() {
      moveRight();
    });
  //------------------------------------------------------------------------------------//
  }
}
