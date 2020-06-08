import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { ShopComponentService } from "../home/shop/shop.component.service";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  mobiles: any;
  electronics: any;
  keywords: any;

  constructor( private router: ActivatedRoute, public shop: ShopComponentService) {
    this.shop.getKeywords().subscribe(data=>{
        this.keywords = data;
        // console.log('mobile keys:'+ JSON.stringify(this.keywords));
    });
  }

  ngOnInit() {
    // this.shop.getKeywords().subscribe(data=>{
    //   if(!data){
    //     this.keywords = data;
    //     console.log('mobile keys:'+ JSON.stringify(this.mobiles));
    //   }
    // });
  }

}
