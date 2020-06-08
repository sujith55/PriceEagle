import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { fromEvent } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { categories } from '../model/categories';

import { AppComponentService } from '../services/app.component.service';
import { GlobalComponent } from '../global/global.component';
@Component({
  selector: 'app-sourcepage',
  templateUrl: './sourcepage.component.html',
  styleUrls: ['./sourcepage.component.css']
})
export class SourcepageComponent implements OnInit {
  psid: number;
  sourceId: number;
  url: any;
  icon: any;

  constructor(private service_:AppComponentService, private http: HttpClient, private router: ActivatedRoute, private global: GlobalComponent) {
    this.router.params.subscribe(params => {
      this.psid = +params['productId'];
      this.sourceId = +params['sourceId'];
     //console.log("psid:::" + this.psid + "sourceId:::" + this.sourceId);
    });
  }

  ngOnInit() {
    this.service_.getProductSource(this.psid).subscribe(res=>{
      this.url = res['sourceUrl'];
      this.icon = res['source']['sourceIcon'];
      setTimeout(()=>{
        // window.location.href = this.url;
   }, 2000);
    });
  }

}
