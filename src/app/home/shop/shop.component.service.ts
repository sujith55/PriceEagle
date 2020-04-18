import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopComponentService{
  private url1 = '/assets/schemas/shopcontent.json';
  private url2 = '/assets/schemas/services.json';
  private url3 = '/assets/schemas/sidebar.json';
  private url4 = '/assets/schemas/slides.json';
  private url5='/assets/schemas/langs.json';
  constructor(private http: HttpClient){

  }
  public getShopContent(): Observable<any> {
    return this.http.get(this.url1);
  }
  public getServiceContent(): Observable<any> {
    return this.http.get(this.url2);
  }
  public getSidebarContent(): Observable<any>{
    return this.http.get(this.url3);
  }
  public getSlideContent(): Observable<any>{
    return this.http.get(this.url4);
  }
  public getLangs(): Observable<any>{
    return this.http.get(this.url5);
  }
}
