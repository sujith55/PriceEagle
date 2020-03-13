import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { categories } from '../model/categories';

import { AppComponentService } from '../services/app.component.service';
import { GlobalComponent } from '../global/global.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'] 
})
export class CategoryComponent implements OnInit {
  categoryurl: any;
  criterias: any;

  constructor(private service_:AppComponentService, private http: HttpClient, private router: ActivatedRoute, private global: GlobalComponent) {
    this.router.params.subscribe(params => {
      this.categoryurl = params['categoryUrl'];
      console.log("Category url:" + this.categoryurl);
    });
  }

  ngOnInit(): void{
    this.service_.getCategories().subscribe(res=>{
      console.log(res);
    });
    this.service_.getCriteriasByCategoryId(this.categoryurl).subscribe(res=>{
      this.criterias = res;
      console.log('criteria:'+ res);
    });
  }

}
