import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { fromEvent } from "rxjs";
import {Router, ActivatedRoute } from "@angular/router";
import { categories } from "../model/categories";

import { AppComponentService } from "../services/app.component.service";
import { GlobalComponent } from "../global/global.component";

import * as $ from 'jquery';
@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"],
})
export class CategoryComponent implements OnInit {
  categoryurl: any;
  criterias: any;
  limit: number;
  all_categories: categories[];
  result: any[];
  private criteriamap = {};
  constructor(
    private service_: AppComponentService,
    private http: HttpClient,
    private router: ActivatedRoute,
    private route:Router,
    private global: GlobalComponent
  ) {
    this.router.params.subscribe((params) => {
      this.categoryurl = params["categoryUrl"];
      console.log("Category url:" + this.categoryurl);
    });
    this.subscription();
  }

  ngOnInit(): void {
    $(document).ready(()=>{
      $('.text').on('click',()=>{
        $('ul li').addClass('active').siblings().removeClass('active');
      });
    });
    // this.service_.getCategories().subscribe(res=>{
    //   this.all_categories = res;
    //   console.log(this.all_categories);
    // });
    // this.service_.getCriteriasByCategoryId(this.categoryurl).subscribe(res=>{
    //   this.criterias = res;
    //   console.log('criteria:'+ JSON.stringify(this.criterias));
    // });
    // this.service_.getProductsByIdandLimit(this.categoryurl, this.limit).subscribe(res=>{
    //   this.result = res;
    //   console.log('Fetching data:' +res)
    // });
  }
  subscription() {
    this.service_.getCategories().subscribe((res) => {
      this.all_categories = res;
      console.log(this.all_categories);
    });
    this.service_
      .getCriteriasByCategoryId(this.categoryurl)
      .subscribe((res) => {
        this.criterias = res;
        // console.log("criteria:" + JSON.stringify(this.criterias));
      });
    this.service_
      .getProductsByIdandLimit(this.categoryurl, this.limit)
      .subscribe((res) => {
        this.result = res;
        // console.log("Fetching data:" + res);
      });
  }
  criteriaSelect(ev, cr_name) {
    var arr = [];
    var check = false;
    var inputbox = "#criteria_" + ev + " input:checked";
    // console.log("criteria select changed:-" + ev);
    $(inputbox).each(function (i) {
      arr[i] = cr_name+':';
      arr.push($(this).val());
      // console.log("da::}}"+$(this).val()+":cr name:"+cr_name);
      check = true;
    });
    if (
      arr.length > 0 &&
      $("#criteria_" + ev)
        .find("input[type='checkbox']")
        .is(":checked") &&
      check
    ) {
      this.criteriamap[ev] = arr;
      console.log("map object::condition:::::" + JSON.stringify(this.criteriamap));
    } else {
      delete this.criteriamap[ev];
    }
    if (JSON.stringify(this.criteriamap) != JSON.stringify({})) {
      var mapobj = {};
      mapobj[this.categoryurl] = this.criteriamap;
      // console.log("map object::condition:::::" + JSON.stringify(mapobj));
      this.service_.getCriteriaResult(mapobj, 0).subscribe((res) => {
        this.result = res;
      });
    } else {
      this.service_
        .getProductsByIdandLimit(this.categoryurl, 0)
        .subscribe((res) => {
          this.result = res;
        });
    }
  }
  sortProducts(id) {
    var arr = [];
    if (id == 1) {
      for (let obj of this.result) {
        arr.push(obj);
        this.result = arr.sort((a, b) => {
          return (
            a["productsSources"][0]["prodPrice"] - b["productsSources"][0]["prodPrice"]
          );
        });
      }
    }else if(id == 2){
      for (let obj of this.result) {
        arr.push(obj);
        this.result = arr.sort((a, b) => {
          return (
            b["productsSources"][0]["prodPrice"] - a["productsSources"][0]["prodPrice"]
          );
        });
      }
    }
    // console.log(arr);
  }
  typeChange(id){
    var limit = 0;
    if(id == 1){
      this.route.navigate(['/Electronics-in-Computer-laptop']);
      let cateUrl = 'Electronics-in-Computer-laptop';
      this.service_
      .getProductsByIdandLimit(cateUrl, limit)
      .subscribe((res) => {
        this.result = res;
        // console.log("Fetching data:" + res);
      });
      this.service_
      .getCriteriasByCategoryId(cateUrl)
      .subscribe((res) => {
        this.criterias = res;
        // console.log("criteria:" + JSON.stringify(this.criterias));
      });
    }else if(id == 2){
      this.route.navigate(['/Electronics-in-Computer-desktop']);
      let cateUrl = 'Electronics-in-Computer-desktop';
      this.service_
      .getProductsByIdandLimit(cateUrl, limit)
      .subscribe((res) => {
        this.result = res;
        // console.log("Fetching data:" + res);
      });
      this.service_
      .getCriteriasByCategoryId(cateUrl)
      .subscribe((res) => {
        this.criterias = res;
        // console.log("criteria:" + JSON.stringify(this.criterias));
      });
    }
  }
}
