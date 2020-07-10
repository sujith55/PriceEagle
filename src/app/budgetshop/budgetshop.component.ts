import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { fromEvent } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { categories } from '../model/categories';

import { AppComponentService } from '../services/app.component.service';
import { GlobalComponent } from '../global/global.component';

@Component({
  selector: 'app-budgetshop',
  templateUrl: './budgetshop.component.html',
  styleUrls: ['./budgetshop.component.css']
})
export class BudgetshopComponent implements OnInit {
  categoryId: any;
  lowprice: any;
  highprice: any;
  budget: any;
  categoryUrl: any;

  constructor(private service_:AppComponentService, private http: HttpClient, private router: ActivatedRoute, private global: GlobalComponent) {
    this.router.params.subscribe(res=>{
      this.categoryUrl = res['categoryUrl'];
      this.categoryId = res['categoryId'];
      this.lowprice = res['lowPrice'];
      this.highprice = res['highPrice'];
      console.log('params:'+ JSON.stringify(res));    
    });
  }

  ngOnInit() {
    this.service_.getCricleFilter(this.categoryId, this.lowprice, this.highprice).subscribe(res=>{
      // console.log('budget data:'+ res);
      this.budget = res;
    })
  }

}
