import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { fromEvent } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { categories } from '../model/categories';

import { AppComponentService } from '../services/app.component.service';
import { ShopComponentService } from '../home/shop/shop.component.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-portal-feedback',
  templateUrl: './portal-feedback.component.html',
  styleUrls: ['./portal-feedback.component.css']
})
export class PortalFeedbackComponent implements OnInit {
  questions: any[];
  portal: any;
  product: any;
  payment: any;
  delivery: any;
  experience: any;
  isVerified: boolean= false;
  username: any;
  email: any;
  mobile: any;
  feedId: any;
  lang = 'en';

  constructor(private service_:AppComponentService, private shop_:ShopComponentService , private http: HttpClient, private router: ActivatedRoute) { }

  feedback = { username: '', mobile: '', email: '', transactionId: '', productPurchased: '', prodPrice: '', purchaseDate: '', merchantName: '', };
  ngOnInit() {
    this.username = sessionStorage.getItem('name');
    this.email = sessionStorage.getItem('email');
    // this.mobile = sessionStorage.getItem('mobile');
    // var lang = 'en';
    // this.service_.getReviews(lang).subscribe((res)=>{
    //   this.questions = res;
    //   console.log('questions:' + JSON.stringify(this.questions));
    // });
    this.shop_.getQuestions().subscribe(res=>{
      this.portal = res[0];
      this.product = res[1];
      this.payment = res[2];
      this.delivery = res[3];
      this.experience = res[4];
      // console.log('portal'+ JSON.stringify(this.delivery));
    });
  }
  public submitForm(data: any){
    if(data != null){
      var temp = data.value;
      var obj = {
        "username":this.username,
        "email":this.email
      };
     const res = {...temp, ...obj};
     console.log(res);
    this.service_.userreviewForm(res, this.lang).subscribe(res=>{
      if(res['status']=="0000"){
        this.feedId = res['data'];
        this.isVerified = true;
      }else{
        Swal.fire('Sorry!',''+res['mesg'], 'error');
      }
    });
    }else{
      Swal.fire('Sorry!', 'Please fill all the fields..!', 'info');
    }
    // console.log('feedback given' + JSON.stringify(data.value));
  }
  public submit(){
    var quest1 = $("#quest_1").attr('data-value');
    var quest2 = $("#quest_2").attr('data-value');
    var quest3 = $("#quest_3").attr('data-value');
    var quest4 = $("#quest_4").attr('data-value');
    var quest5 = $("#quest_5").attr('data-value');
    var quest6 = $("#quest_6").attr('data-value');
    var quest7 = $("#quest_7").attr('data-value');
    var quest8 = $("#quest_8").attr('data-value');
    var quest9 = $("#quest_9").attr('data-value');
    var quest10 = $("#quest_10").attr('data-value');
    var quest11 = $("#quest_11").attr('data-value');
    var quest12 = $("#quest_12").attr('data-value');
    var quest13 = $("#quest_13").attr('data-value');
    var quest14 = $("#quest_14").attr('data-value');
    var quest15 = $("#quest_15").attr('data-value');
    var quest16 = $("#quest_16").attr('data-value');
    var quest17 = $("#quest_17").attr('data-value');
    var quest18 = $("#quest_18").attr('data-value');
    var quest19 = $("#quest_19").attr('data-value');
    var quest20 = $("#quest_20").attr('data-value');
    var quest21 = $("#quest_21").attr('data-value');
    var quest22 = $("#quest_22").attr('data-value');
     var select1 = $("#select_1  option:selected").val();
    var select2 = $("#select_2  option:selected").val();
    var select3 = $("#select_3  option:selected").val();
    var select4 = $("#select_4  option:selected").val();
    var select5 = $("#select_5  option:selected").val();
    var select6 = $("#select_6  option:selected").val();
    var select7 = $("#select_7  option:selected").val();
    var select8 = $("#select_8  option:selected").val();
    var select9 = $("#select_9  option:selected").val();
    var select10 = $("#select_10  option:selected").val();
    var select11 = $("#select_11  option:selected").val();
    var select12 = $("#select_12  option:selected").val();
    var select13 = $("#select_13  option:selected").val();
    var select14 = $("#select_14  option:selected").val();
    var select15 = $("#select_15  option:selected").val();
    var select16 = $("#select_16  option:selected").val();
    var select17 = $("#select_17  option:selected").val();
    var select18 = $("#select_18 option:selected").val();
    var select19 = $("#select_19  option:selected").val();
    var select20 = $("#select_20  option:selected").val();
    var select21 = $("#select_21  option:selected").val();
    var select22 = $("#select_22  option:selected").val();
    var lang = 'en';
    var obj = [{
      answerId: select1,
      questionId: quest1,
      language: lang,
    },
      {
        answerId: select2,
        questionId: quest2,
        language: lang,
      },
      {
        answerId: select3,
        questionId: quest3,
        language: lang,
      },
      {
        answerId: select4,
        questionId: quest4,
        language: lang,
      },
      {
        answerId: select5,
        questionId: quest5,
        language: lang,
      },
      {
        answerId: select6,
        questionId: quest6,
        language: lang,
      },
      {
        answerId: select7,
        questionId: quest7,
        language: lang,
      },
      {
        answerId: select8,
        questionId: quest8,
        language: lang,
      },
      {
        answerId: select9,
        questionId: quest9,
        language: lang,
      },
      {
        answerId: select10,
        questionId: quest10,
        language: lang,
      },
      {
        answerId: select11,
        questionId: quest11,
        language: lang,
      },
      {
        answerId: select12,
        questionId: quest12,
        language: lang,
      },
      {
        answerId: select13,
        questionId: quest13,
        language: lang,
      },
      {
        answerId: select14,
        questionId: quest14,
        language: lang,
      },
      {
        answerId: select15,
        questionId: quest15,
        language: lang,
      },
      {
        answerId: select16,
        questionId: quest16,
        language: lang,
      },
      {
        answerId: select17,
        questionId: quest17,
        language: lang,
      },
      {
        answerId: select18,
        questionId: quest18,
        language: lang,
      },
      {
        answerId: select19,
        questionId: quest19,
        language: lang,
      },
      {
        answerId: select20,
        questionId: quest20,
        language: lang,
      },
      {
        answerId: select21,
        questionId: quest21,
        language: lang,
      },
      {
        answerId: select22,
        questionId: quest22,
        language: lang,
      }
    ]
    console.log('form data is:' + JSON.stringify(obj));
    this.service_.setReviewAnswers(obj, this.feedId).subscribe(res=>{
      if(res['status']=="0000"){
        Swal.fire('Thank you','We have received your valuable feedback','success');
        location.reload();
      }else{
        Swal.fire('Sorry',''+res['mesg'],'warning');
      }
    });
  }
}
