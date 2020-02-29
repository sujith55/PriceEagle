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
  ];
  public shop = [
    {
      title:"MOBILES",
      img:"/assets/shop/mobiles.png",
      contents:[
        'New Releases',
        'Smart Phones',
        'Basic Phones',
        'Tablets',
        'Mobile Accessories'
      ]
    },
    {
      title:"ELECTRONICS",
      img:"/assets/shop/electronics.png",
      contents:[
        'Computers',
        'Television',
        'Refriegerators',
        'Washing Machines',
        'Air Conditioners'
      ]
    },
    {
      title:"HOME APPLIANCES",
      img:"/assets/shop/home appliances.png",
      contents:[
        'Cooker',
        'Mixer & Grinders',
        'Geysers',
        'Microwave',
        'Iron Box'
      ]
    },
    {
      title:"FASHION",
      img:"/assets/shop/fashion.png",
      contents:[
        'Men',
        'Women',
        'Kids',
        'Watches',
        'Lingeries'
      ]
    },
    {
      title:"BEAUTY",
      img:"/assets/shop/beauty.png",
      contents:[
        'Make-up Items',
        'Creams & Shampoos',
        'Shaving Products',
        'Perfume & Deos',
        'SunGlasses'
      ]
    },
    {
      title:"JEWELLERY",
      img:"/assets/shop/jewellery.png",
      contents:[
        'Rings',
        'Pendents',
        'Necklace',
        'Bangles',
        'Waist Bands'
      ]
    },
    {
      title:"AGRICULTURE",
      img:"/assets/shop/agriculture.png",
      contents:[
        'Fertilisers',
        'Seeds',
        'Pesticides',
        'Trap Sets',
        'Mulch Film'
      ]
    },
    {
      title:"PUJA",
      img:"/assets/shop/puja.png",
      contents:[
        'Yantra',
        'Rudraaksh',
        'Puja Services',
        'Idols & Figurines',
        'Puja Books'
      ]
    },
    {
      title:"MEDICINE",
      img:"/assets/shop/medicine.png",
      contents:[
        'MedLife',
        'Netmeds',
        '1Mg',
        'Condoms'
      ]
    },
    {
      title:"BOOKS",
      img:"/assets/shop/books.png",
      contents:[
        'Fiction',
        'Children',
        'Biographics',
        'Text Books',
        'Business & Econimics'
      ]
    },
    {
      title:"BAGS & LUGGAGES",
      img:"/assets/shop/bags and luggages.png",
      contents:[
        'Back Packs',
        'Bags',
        'Briefcases',
        'Cosmetic Bags',
        'Duffel Bags'
      ]
    },
    {
      title:"SPORTS & FITNESS",
      img:"/assets/shop/sports.png",
      contents:[
        'Cricket Balls',
        'Cricket Bats',
        'Dumbles',
        'Foot Balls',
        'Gloves & Belts'
      ]
    }
  ];
  public services = [
    {
      title:"TRAVEL",
      img:"/assets/shop/travel.png",
      contents:[
        'Buses',
        'Cabs',
        'Flights',
        'Trains'
      ]
    },
    {
      title:"HOTEL",
      img:"/assets/shop/hotel.png",
      contents:[
        'Airbnb',
        'Clear Trip',
        'Goibibo',
        'MakeMyTrip',
        'OYO'
      ]
    },
    {
      title:"RECHARGE",
      img:"/assets/shop/recharge.png",
      contents:[
        'Amazon',
        'FreeCharge',
        'Mobikwik',
        'Paytm'
      ]
    },
    {
      title:"EDUCATION",
      img:"/assets/shop/education.png",
      contents:[
        'BYJUS',
        'SimpliLearn',
        'Unacademy',
        'Vedantu'
      ]
    },
    {
      title:"FOOD SERVICES",
      img:"/assets/shop/food.png",
      contents:[
        'Eatfit',
        'Swiggy',
        'Zomato'
      ]
    },
    {
      title:"REPAIR & SERVICES",
      img:"/assets/shop/repair and services.png",
      contents:[
        'Beautician',
        'Carpenter',
        'Electrician',
        'Painter',
        'PestControl'
      ]
    }
  ];

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
