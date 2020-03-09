import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { AppComponentService } from '../services/app.component.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public language: Observable<any[]>;
  constructor(private http: HttpClient, private router: ActivatedRoute, private service:AppComponentService) { }

  ngOnInit(): void{
    this.service.getLanguages().subscribe(res=>{
      this.language = res['data'] as Observable<any[]>
    })
  }

}
