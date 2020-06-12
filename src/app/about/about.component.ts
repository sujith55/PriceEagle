import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import * as $ from 'jquery';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( private router: ActivatedRoute) { }

  ngOnInit() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }

}
