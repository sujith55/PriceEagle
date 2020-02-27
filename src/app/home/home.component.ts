import { Component, OnInit } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
import * as $ from'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public slides = [
    {
      img:"/assets/slider/img1.svg"
    },
    {
      img:"/assets/slider/img1.svg"
    },
    {
      img:"/assets/slider/img1.svg"
    },
    {
      img:"/assets/slider/img1.svg"
    },
    {
      img:"/assets/slider/img1.svg"
    },
    {
      img:"/assets/slider/img1.svg"
    }
  ];
  public sidebar = [
    {
      img:"/assets/sidebar/picture1.png",
      name:'Mobiles',
      url:"/"
    },
    {
      img:"/assets/sidebar/picture2.png",
      name:'Electronics',
      url:"/"
    },
    {
      img:"/assets/sidebar/picture3.png",
      name:'Home Appliances',
      url:"/"
    },
    {
      img:"/assets/sidebar/picture4.png",
      name:'Fashion',
      url:"/"
    },
    {
      img:"/assets/sidebar/picture5.png",
      name:'Beauty',
      url:"/"
    },
    {
      img:"/assets/sidebar/picture6.png",
      name:'Jewellery',
      url:"/"
    },
    {
      img:"/assets/sidebar/picture7.png",
      name:'Agriculture',
      url:"/"
    },
    {
      img:"/assets/sidebar/picture8.png",
      name:'Puja',
      url:"/"
    },
    {
      img:"/assets/sidebar/picture9.png",
      name:'Medicine',
      url:"/"
    },
    {
      img:"/assets/sidebar/picture10.png",
      name:'Books',
      url:"/"
    },
    {
      img:"/assets/sidebar/picture11.png",
      name:'Bags & Luggages',
      url:"/"
    },
    {
      img:"/assets/sidebar/picture12.png",
      name:'Sports & Fitness',
      url:"/"
    },
    {
      img:"/assets/sidebar/picture13.png",
      name:'Travel',
      url:"/"
    },
    {
      img:"/assets/sidebar/picture14.png",
      name:'Hotel',
      url:"/"
    },
    {
      img:"/assets/sidebar/picture15.png",
      name:'Recharge',
      url:"/"
    },
    {
      img:"/assets/sidebar/picture16.png",
      name:'Education',
      url:"/"
    },
    {
      img:"/assets/sidebar/picture17.png",
      name:'Food Services',
      url:"/"
    },
    {
      img:"/assets/sidebar/picture18.png",
      name:'Repair & Services',
      url:"/"
    },
  ]
  public main = [
    {
      img:"/assets/banner/picture1.jpg"
    },
    {
      img:"/assets/banner/picture1.jpg"
    },
    // {
    //   img:"/assets/banner/picture1.jpg"
    // },
    // {
    //   img:"/assets/banner/picture1.jpg"
    // },
    // {
    //   img:"/assets/banner/picture1.jpg"
    // }
  ]
  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 5,   
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: false,
    pagination: false,
    autoplay: false,
    loop: true
  };

  constructor() { }

  ngOnInit() {

    this.banner();
  }
  banner(){
    //-------------------------------Auto play banner------------------------------------//
  // setInterval(()=>{
  //   moveRight()
  // }, 5000);
  // --------------------------------------------------------------------------------//
    // --------------------------------------Main Promotional banner----------------------------------//

    var slideCount = $("#slider ul li").length;
    var slideWidth = $("#slider ul li").width();
    var slideHeight = $("#slider ul li").height();
    var sliderUlWidth = slideCount * slideWidth;

    $("#slider").css({ width: slideWidth, height: slideHeight });
    $("#slider ul").css({ width: sliderUlWidth, marginLeft: -slideWidth });
    // $("#slider ul li:last-child").prependTo("#slider ul");
    function moveLeft() {
      $("#slider ul").animate(
        {
          left: +slideWidth
        },
        400,
        function() {
          // $("#slider ul li:last-child").prependTo("#slider ul");
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
          // $("#slider ul li:first-child").appendTo("#slider ul");
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
