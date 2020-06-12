import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import * as $ from 'jquery';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor( private router: ActivatedRoute) { }

  ngOnInit() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }

}
