import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import {
  FormGroup,
  FormBuilder,
  FormArray,
  Validators,
  FormControl,
  Validator,
} from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import * as $ from "jquery";

import { AppComponentService } from "../services/app.component.service";
import { ShopComponentService } from "../home/shop/shop.component.service";
import { categories } from "../model/categories";
import { GlobalComponent } from "../global/global.component";
import Swal from "sweetalert2";

@Component({
  selector: "app-detailpage",
  templateUrl: "./detailpage.component.html",
  styleUrls: ["./detailpage.component.css"],
})
export class DetailpageComponent implements OnInit {
  categoryurl: string;
  productId: number;
  detail: any;
  url: any;
  psid: any;
  sourceId: any;
  categoryname: any;
  prodSpec: any[];
  form: FormGroup;
  good_review: any;
  bad_review: any;
  userId: any;
  mobileNo: any;
  specF: any;
  public checkeds = 0;
  public limit = 3;
  viewcount: number;
  highlights: any[];
  list: string[] = [];
  list2: string[] = [];
  questions= {} = [
    {
      qid: 1,
      ans: "sample text",
    },
    {
      qid: 2,
      ans: "sample text",
    },
    {
      qid: 3,
      ans: "sample text",
    },
    {
      qid: 4,
      ans: "sample text",
    },
    {
      qid: 5,
      ans: "sample text",
    },
    {
      qid: 6,
      ans: "sample text",
    },
    {
      qid: 7,
      ans: "sample text",
    },
  ];
  user: string;
  data: Object;
  goodReview: any;
  badReview: any;
  product: any;
  isRecommend: boolean= false;
  isLoad:boolean = false;
  isHigh: boolean= false;
  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private global: GlobalComponent,
    private appService: AppComponentService,
    private shop: ShopComponentService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      good_review: new FormArray([], Validators.required),
      bad_review: new FormArray([], Validators.required),
    });
    this.userId = sessionStorage.getItem('id');
    // this.onCheckboxChange(this.userId, this.product);
    this.categoryurl = this.router.snapshot.paramMap.get("categoryUrl");
    this.router.params.subscribe((params) => {
      // this.categoryurl = +params['categoryUrl'];
      this.productId = +params["productId"];
      // console.log("this product has Id of::" + this.productId);
      this.appService.getProductDetailsById(this.productId).subscribe((res) => {
        this.detail = res;
        this.prodSpec = res["productSpecs"];
        this.product = res["productId"];
        // console.log('specs:'+ JSON.stringify(this.prodSpec['RAM']));
      });
      this.appService.getProductDetailsById(this.productId).subscribe((res) => {
        this.url = res["productsSources"][0]["sourceUrl"];
        this.psid = res["productsSources"][0]["psId"];
        this.sourceId = res["productsSources"][0]["source"]["sourceId"];
        this.categoryname = res["categoryUrl"];
        this.specF = res["prodSpecJson"];
      });
    });
  }

  ngOnInit() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    this.appService.getProductDetailsById(this.productId).subscribe(res => {
      if ((res["status"] = "0000")) {
        this.specF = res["prodSpecJson"];
        this.product = res["productId"];
        this.userId = sessionStorage.getItem('id');
        this.onCheckboxChange(this.userId, this.product);
        console.log("id is:"+this.product);
        this.highLights(this.specF);
        this.isLoad = true;
      }
      this.appService.getProductReview(this.product).subscribe(res=>{
        if(res['status']=="0000"){
        this.isRecommend = true;
        this.data = res;
        this.goodReview = this.data["data"]["GoodExp"];
        this.badReview = this.data["data"]["BadExp"];
        }
      });
      $(document).ready(()=>{
        $('#guidelines').hover(()=>{
          $('.guide').show(200);
          // alert('ok works');
        }, ()=>{
          $('.guide').hide();
          // alert('works also...');
        });
        var $checks = $("input:checkbox").click(function(e) {
          var numChecked = $checks.filter(":checked").length;
          if (numChecked > 3) {
           Swal.fire('Sorry!','You can choose 3 options only..!','info');
            // alert("sorry, you have already selected 3 checkboxes!");
            $(this).prop("checked", false);
          }
        });
      //   // $("input[type='radio']").change(function(){
      //   //   var count = $("input[type='radio']:checked").length;
      //   // if(count>1){
      //   //   $(this).prop('checked', false);
      //   //     alert("You cannot add more than 1");
      //   // }
      // });
      });
    });
    // this.highLights();
  }
  highLights(data) {
    this.shop.getHighLights().subscribe(res => {
      this.highlights = res;
      for (let obj of this.highlights) {
        if (obj.categoryUrl == this.categoryurl) {
          this.isHigh = true;
          let value = obj["highlightName"];
          Object.keys(value).forEach((i, key, val) => {
            this.list.push(value[i].value);
          });
          this.list.forEach((i, key, val) => {
            this.list2.push(data[i]);
          });
          console.log('data is:'+(this.list2));
        }
      }
    });
  }
  // check(entry) {
  //   if (!entry.isChecked) {
  //     this.checkeds++;
  //     console.log(this.checkeds);
  //     if (this.checkeds == 3) {
  //       alert("You can choose upto 3 options out of 16");
  //       $(this).prop("checked", false);
  //     }
  //   } else {
  //     this.checkeds--;
  //     // console.log(this.checkeds);
  //   }
  // }
  onCheckboxChange(userId, product) {
    console.log(userId, product);
    this.good_review = [
      {
        question: "Good After Sale Support",
        priority: 1,
        categoryid: 0,
        userId: userId,
        product: product,
        // mobileNumber: mobileNo,
        url: "/assets/review_imgs/Picture1.png",
        isChecked: false,
      },
      {
        question: "Easy To Use",
        priority: 2,
        categoryid: 0,
        userId: userId,
        product: product,
        // mobileNumber: mobileNo,
        url: "/assets/review_imgs/Picture2.png",
        isChecked: false,
      },
      {
        question: "Long Life Or Durable",
        priority: 3,
        categoryid: 0,
        userId: userId,
        product: product,
        // mobileNumber: mobileNo,
        url: "/assets/review_imgs/Picture3.png",
        isChecked: false,
      },
      {
        question: "Value For Money",
        priority: 4,
        categoryid: 0,
        userId: userId,
        product: product,
        // mobileNumber: mobileNo,
        url: "/assets/review_imgs/Picture4.png",
        isChecked: false,
      },
      {
        question: "Good Design & Finish",
        priority: 5,
        categoryid: 0,
        userId: userId,
        product: product,
        // mobileNumber: mobileNo,
        url: "/assets/review_imgs/Picture5.png",
        isChecked: false,
      },
      {
        question: "Functioning Perfectly",
        priority: 6,
        categoryid: 0,
        userId: userId,
        product: product,
        // mobileNumber: mobileNo,
        url: "/assets/review_imgs/Picture6.png",
        isChecked: false,
      },
      {
        question: "Product Matching Specification",
        priority: 7,
        categoryid: 0,
        userId: userId,
        product: product,
        // mobileNumber: mobileNo,
        url: "/assets/review_imgs/Picture7.png",
        isChecked: false,
      },
      {
        question: "Good Packaging",
        priority: 8,
        categoryid: 0,
        userId: userId,
        product: product,
        // mobileNumber: mobileNo,
        url: "/assets/review_imgs/Picture8.png",
        isChecked: false,
      },
    ];
    this.bad_review = [
      {
        question: "Bad After Sale Support",
        priority: 1,
        categoryid: 1,
        userId: userId,
        product: product,
        // mobileNumber: mobileNo,
        url: "/assets/review_imgs/Picture9.png",
        isChecked: false,
      },
      {
        question: "Difficult To Use",
        priority: 2,
        categoryid: 1,
        userId: userId,
        product: product,
        // mobileNumber: mobileNo,
        url: "/assets/review_imgs/Picture10.png",
        isChecked: false,
      },
      {
        question: "Short Life Or Delicate",
        priority: 3,
        categoryid: 1,
        userId: userId,
        product: product,
        // mobileNumber: mobileNo,
        url: "/assets/review_imgs/Picture11.png",
        isChecked: false,
      },
      {
        question: "Less Value For Money",
        priority: 4,
        categoryid: 1,
        userId: userId,
        product: product,
        // mobileNumber: mobileNo,
        url: "/assets/review_imgs/Picture12.png",
        isChecked: false,
      },
      {
        question: "Bad Design & Finish",
        priority: 5,
        categoryid: 1,
        userId: userId,
        product: product,
        // mobileNumber: mobileNo,
        url: "/assets/review_imgs/Picture13.png",
        isChecked: false,
      },
      {
        question: "Not Functioning Properly",
        priority: 6,
        categoryid: 1,
        userId: userId,
        product: product,
        // mobileNumber: mobileNo,
        url: "/assets/review_imgs/Picture14.png",
        isChecked: false,
      },
      {
        question: "Product Not Matching Specification",
        priority: 7,
        categoryid: 1,
        userId: userId,
        product: product,
        // mobileNumber: mobileNo,
        url: "/assets/review_imgs/Picture15.png",
        isChecked: false,
      },
      {
        question: "Bad Packaging",
        priority: 8,
        categoryid: 1,
        userId: userId,
        product: product,
        // mobileNumber: mobileNo,
        url: "/assets/review_imgs/Picture16.png",
        isChecked: false,
      },
    ];
    this.good_review.map((o, i) => {
      const control = new FormControl();
      (this.form.controls.good_review as FormArray).push(control);
      // console.log('only 3 options allowed..');
    });
    this.bad_review.map((o, i) => {
      const control1 = new FormControl();
      (this.form.controls.bad_review as FormArray).push(control1);
    });
  }
  submit() {
    if (this.form.dirty && $("input[type=checkbox]:checked").length != 0) {
      var selectedReviews = this.form.value.good_review
        .map((v, i) => (v ? this.good_review[i] : null))
        .filter((v) => v !== null);
      var selectedReviews1 = this.form.value.bad_review
        .map((v, i) => (v ? this.bad_review[i] : null))
        .filter((v) => v !== null);
      var opts = selectedReviews.concat(selectedReviews1);
      // var options = opts.concat(this.questions);
      var quest1 = $('#question1').attr('value');
      var quest2 = $('#question2').attr('value');
      var quest3 = $('#question3').attr('value');
      var quest4 = $('#question4').attr('value');
      var quest5 = $('#question5').attr('value');
      var quest6 = $('#question6').attr('value');
      var quest7 = $('#question7').attr('value');
      var answr1 = $('#frst_ques').val();
      var answr2 = $('#secnd_ques').val();
      var answr3 = $('#third_ques').val();
      var answr4 = $('#forth_ques').val();
      var answr5 = $('input[name="option"]:checked').val();
      var answr6 = $('#sixth_ques').val();
      var answr7 = $('input[name="option1"]:checked').val();
      var obj=[
        {
          question: quest1,
          descriptive_response: answr1
        },
        {
          question: quest2,
          descriptive_response: answr2
        },
        {
          question: quest3,
          descriptive_response: answr3
        },
        {
          question: quest4,
          descriptive_response: answr4
        },
        {
          question: quest5,
          descriptive_response:answr5
        },
        {
          question: quest6,
          descriptive_response: answr6
        },
        {
          question: quest7,
          descriptive_response:answr7
        }
      ];
      var temp = opts.concat(obj);
      console.log('review form data:'+ JSON.stringify(temp));
      this.appService.setProductGoodReview(opts).subscribe((res) => {
        if (res["status"] == "0000") {
          Swal.fire(
            "Thank you!",
            "(Your Valuable feedback is being used for recommendation)",
            "success"
          ).then(()=>{
            this.form.reset();
            location.reload();
          });
        } else {
          Swal.fire("Sorry!", "" + res["mesg"], "error");
        }
      });
      console.log("selected data:" + JSON.stringify(opts));
    } else {
      Swal.fire("Sorry!", "Please choose atleast 1 option!", "warning");
    }
  }
  waah() {
    this.viewcount = 100;
    let inc_count = this.viewcount + 1;
    if (sessionStorage.getItem("user") != null) {
      let apikey = sessionStorage.getItem("user");
      this.appService
        .setviewCount(this.productId, inc_count, apikey)
        .subscribe((res) => {
          if (res.status == "1022") {
            sessionStorage.removeItem("user");
            Swal.fire(
              "Please login to continue",
              "" + JSON.stringify(res.mesg),
              "error"
            );
          } else if (res.status == "1025") {
            Swal.fire("Sorry", "" + JSON.stringify(res.mesg), "error");
          } else {
            this.viewcount = res.ViewCount;
            let audioPlayer: HTMLMediaElement = <HTMLMediaElement>(
              document.getElementById("audio")
            );
            audioPlayer.play();
            let whaa;
            if (res.viewCount - 101 == 0) {
              whaa = "Success";
            } else {
              whaa =
                "Success:" +
                (res.viewCount - 101) +
                " other person(s) waah`ed this product";
            }
            Swal.fire({
              imageUrl: "",
              imageHeight: 20,
              title: "Waah",
              validationMessage: "Thank you",
              icon: "success",
            });
          }
        });
    } else {
      Swal.fire("Please login to continue", "", "error");
    }
  }
}
