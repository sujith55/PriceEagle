import { Injectable, Output, EventEmitter } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, filter, switchMap } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { categories } from '../model/categories';

@Injectable()
export class AppComponentService {
  @Output()
  public user: EventEmitter<any> = new EventEmitter();

  @Output()
  public productId: EventEmitter<number> = new EventEmitter();

  @Output()
  public imageUrl: EventEmitter<string> = new EventEmitter();

  constructor(private http: HttpClient) {}
  public getBannerList() {
    return this.http
      .get(environment.baseUrl + "add_banner")
      .pipe(map(response => response["data"]));
  }
  public getCategories(): Observable<categories[]> {
    // console.log('Enter into the methd');
    return this.http
      .get(environment.baseUrl + "categories")
      .pipe(map(response => response["data"]));
  }
  public getLanguages(): Observable<any> {
    return this.http.get(environment.baseUrl + "user/language");
  }
  public getCriteriasByCategoryId(criteria: any): Observable<any[]> {
    return this.http.get(environment.baseUrl + 'criteria_list?categoryUrl=' + criteria).pipe(map(response => response['data']));
  }
  public getCriteriaResult(filter: {}, limit: number): Observable<any[]> {
    const body = { filter };
    // console.log("data::::" + JSON.stringify(environment.baseUrl + 'filters?criteria=' + filter + '&limit=' + limit));
    return this.http.post(environment.baseUrl + 'filters?limit=' + limit, filter, { responseType: 'json' }).pipe(map(response => response['data']));

  }
  public getProductsByIdandLimit(url: any, limit: number): Observable<any[]> {
    if (limit === undefined) limit = 0;
    //console.log("getProductByIdandLimt method::");
    return this.http.get(environment.baseUrl + 'products?categoryUrl=' + url + '&limit=' + limit).pipe(map(response => response['data']));
  }
  public userLogin(user: any): Observable<any> {
    return this.http.post(environment.baseUrl + "user/user_login", user,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        , responseType: 'json'
      })
      .pipe(map(res => {
        return res;
      }));
  }
  public userRegister(user: any){
    return this.http.post(environment.baseUrl + "user/user_register",user,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        , responseType: 'json'
      }).pipe(map(res => { return res }));
  }
  public registerOTP(user: any): Observable<any> {
    return this.http.post(environment.baseUrl + "user/verify_otp_register", user,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        , responseType: 'json'
      })
      .pipe(map(res => {
        return res;
      }));
  }
  public userForgotPass(user: any): Observable<any> {
    return this.http.post(environment.baseUrl + "user/forget_password_otp", user,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        , responseType: 'json'
      })
      .pipe(map(res => {
        return res;
      }));
  }
  public NewPassword(user: any): Observable<any> {
    return this.http.post(environment.baseUrl + "user/verify_otp_reset_password", user,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        , responseType: 'json'
      })
      .pipe(map(res => {
        return res;
      }));
  }
}