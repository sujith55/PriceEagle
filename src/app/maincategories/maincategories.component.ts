import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { AppComponentService } from "../services/app.component.service";
import { SubcatComponentService } from "../maincategories/subcat.component.service";
import { GlobalComponent } from "../global/global.component";
import { mapTo } from "rxjs/operators";
import { Observable, interval, merge, of, concat, forkJoin } from "rxjs";

@Component({
  selector: "app-maincategories",
  templateUrl: "./maincategories.component.html",
  styleUrls: ["./maincategories.component.css"],
})
export class MaincategoriesComponent implements OnInit {
  categoryurl: any;
  result: string[] = [];
  pid: any;
  subcat1 = {
    url1: "Mobiles-in-new",
    url2: "Mobiles-in-smart",
    url3: "Mobiles-in-basic",
    url4: "Mobiles-in-tablets",
    url5: "Mobiles-in-accessories",
  };
  subcat2 = {
    url1: "Electronics-in-Computer-laptop",
    url2: "Electronics-in-Telivision",
    url3: "Electronics-in-Refrigetor",
    url4: "Electronics-in-wm",
    url5: "Electronics-in-AirConditioner",
  };
  subcat3 = {
    url1: "Home-Appliances-in-cooker",
    url2: "Home-Appliances-in-Mixer",
    url3: "Home-Appliances-in-geyser",
    url4: "Home-Appliances-in-MicroWave",
    url5: "Home-Appliances-in-IronBox",
  };
  subcat4 = {
    url1:"Fashion-in-men-casualshirts",
    url2:"Fashion-women-fusionwear",
    url3:"Fashion-kids-boy-ethnicwear",
    url4:"Fashion-kids-girls-tshirts",
    url5:"Fashion-infants-babyboy"
  };
  subcat5 = {
    url1:"Beauty-in-makeup",
    url2:"Beauty-in-creams",
    url3:"Beauty-in-shavingmen",
    url4:"Beauty-in-perfume",
    url5:"Beauty-in-sunglasses"
  };
  subcat6 = {
    url1:"Jewellery-in-Ring",
    url2:"Jewellery-in-Pendants",
    url3:"Jewellery-in-Necklace",
    url4:"Jewellery-in-Bangles",
    url5:"Jewellery-in-waistBand"
  };
  subcat7 = {
    url1:"Agriculture-in-Fertilisers",
    url2:"Agriculture-in-seed",
    url3:"Agriculture-in-pest",
    url4:"Agriculture-in-trap",
    url5:"Agriculture-in-farmequipments"
  };
  subcat8 = {
    url1:"Puja-in-Yantra",
    url2:"Puja-in-rudraaksh",
    url3:"Puja-in-service",
    url4:"Puja-in-idols",
    url5:"Puja-in-books"
  };
  subcat10 = {
    url1:"Books-in-fiction",
    url2:"Books-in-children",
    url3:"Books-in-personaldev",
    url4:"Books-in-business",
    url5:"Books-in-competitive"
  };
  subcat11 = {
    url1:"BagsLuggages-in-backpack",
    url2:"BagsLuggages-in-handbags",
    url3:"BagsLuggages-in-luggage",
    url4:"BagsLuggages-in-sportsbag",
    url5:"BagsLuggages-in-wallet"
  }
  subcat12 = {
    url1:"SportsFitness-in-indoor",
    url2:"SportsFitness-in-outdoor",
    url3:"SportsFitness-in-gym",
    url4:"SportsFitness-in-swimming",
    url5:"SportsFitness-in-kids"
  }
  limit: number;
  first: any;
  second: any;
  third: any;
  fourth: any;
  fifth: any;
  list: string[] = [];
  constructor(
    private service_: AppComponentService,
    private http: HttpClient,
    private router: ActivatedRoute,
    private global: GlobalComponent,
    private subservice_: SubcatComponentService
  ) {
    this.router.params.subscribe((params) => {
      // console.log(params);
      this.categoryurl = params["cateId"];
      this.pid = params["pid"];
      console.log("Category url:" + this.categoryurl, this.pid);
    });
  }

  ngOnInit() {
    this.subscription();
    // this.subservice_.getSubcats().subscribe(data=>{
    //   this.res = data;
    // });
  }
  subscription() {
    if (this.pid == 1) {
      this.subcats(this.subcat1);
    } else if (this.pid == 2) {
      this.subcats(this.subcat2);
    } else if (this.pid == 3) {
      this.subcats(this.subcat3);
    }else if(this.pid == 4){
      this.subcats(this.subcat4);
    }else if(this.pid == 5){
      this.subcats(this.subcat5);
    }else if(this.pid == 6){
      this.subcats(this.subcat6);
    }else if(this.pid == 7){
      this.subcats(this.subcat7);
    }else if(this.pid == 8){
      this.subcats(this.subcat8);
    }else if(this.pid == 10){
      this.subcats(this.subcat10);
    }else if(this.pid == 11){
      this.subcats(this.subcat11);
    }else if(this.pid == 12){
      this.subcats(this.subcat12);
    }
  }
  subcats(obj) {
    this.limit = 0;
    // console.log(obj);
    this.service_
      .getProductsByIdandLimit(obj.url1, this.limit)
      .subscribe((res) => {
        this.first = res;
        for(let obj of this.first){
          this.list.push(obj);
          // Object.keys(obj).forEach((i)=>{
          //     this.list.push(obj[i]);
          // });
        }
      });
      this.service_
      .getProductsByIdandLimit(obj.url2, this.limit)
      .subscribe((res) => {
        this.second = res;
        for(let obj of this.second){
          this.list.push(obj);
          // Object.keys(obj).forEach((i)=>{
          //   this.list.push(obj);
          // })
        }
      });
    this.service_
      .getProductsByIdandLimit(obj.url3, this.limit)
      .subscribe((res) => {
        this.third = res;
        for(let obj of this.third){
          this.list.push(obj);
          // Object.keys(obj).forEach((i)=>{
          //   this.list.push(obj);
          // })
        }
      });
    this.service_
      .getProductsByIdandLimit(obj.url4, this.limit)
      .subscribe((res) => {
        this.fourth = res;
        for(let obj of this.fourth){
          this.list.push(obj);
          // Object.keys(obj).forEach((i)=>{
          //   this.list.push(obj);
          // })
        }
      });
    this.service_
      .getProductsByIdandLimit(obj.url5, this.limit)
      .subscribe((res) => {
        this.fifth = res;
        for(let obj of this.fifth){
          this.list.push(obj);
          // Object.keys(obj).forEach((i)=>{
          //   this.list.push(obj);
          // })
        }
        // console.log('data is :' + this.list)
      });
  }
}
