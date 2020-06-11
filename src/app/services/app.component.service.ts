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
  public getProductDetailsById(productid: number): Observable<any[]> {
    return this.http.get(environment.baseUrl + 'product_dec?productId=' + productid).pipe(map(response => response['data']));
  }
  public setProductGoodReview(selectedReviews: any[]) {
    return this.http.post(environment.baseUrl + "Review/review_submit_byuser", selectedReviews, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      , responseType: 'json'
    }).pipe(map(res => {return res}));
  }
  public getProductReview(productId:any){
    return this.http.get(environment.baseUrl+ 'Review/get/'+ productId +'/reviews',{
     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
     , responseType: 'json'}).pipe(map(res =>{return res}));
  }
  public setviewCount(productid: number, view_count: number, apikey: any): any {
    let httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    }).set('api-key', apikey);
    return this.http.get(environment.baseUrl + "setView_count?prod_Id=" + productid + "&viewcount=" + view_count,
      {
        responseType: 'json', headers: httpHeaders
      }).pipe(map(response => response));
  }
  public getReviews(language: string): Observable<any[]> {
    return this.http.get(environment.baseUrl + 'Review/structrue_review_list?language=' + language).pipe(map(res => res['data']));
  }
  public userreviewForm(user: any, lang:any): Observable<any> {
    let httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    }).set('language', lang);
    return this.http.post(environment.baseUrl + "Review/set_feedback_form", user,
      {
        responseType: 'json', headers: httpHeaders
      }).pipe(map(res => { return res }));
  }
  public getBudget() {
    return this.http.get(environment.baseUrl + "circle_price_range").pipe(map(response => response['data']));
  }
  public getCricleFilter(categoryId: string, min: number, max: number): Observable<any> {
    return this.http.get(environment.baseUrl + 'circle_filter?categoryId=' + categoryId + '&minRange=' + min + '&maxRange=' + max).pipe(map(response => response['data']));
  }
  public getProductSource(id: number) {
    return this.http.get(environment.baseUrl + 'product_source?psId=' + id).pipe(map(response => response['data']));
  }
   public search(postdata: any){
        return this.http.get(environment.baseUrl+"apiSearch?searchByword="+postdata.searchByword).pipe(map(response=> response));
  }
  public setReviewAnswers(obj: any, feedId: any): any {
    let httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    }).set('feedback_id', feedId);
    return this.http.post(environment.baseUrl + 'Review/setReviewAnswers', obj, {
      responseType: 'json', headers: httpHeaders
    }).pipe(map(res => {
      return res;
    }))
  }
  public getUserDetails(apiKey: any) {
    return this.http.get(environment.baseUrl + 'user/getAccoutProfile?apikey=' + apiKey).pipe(map(res => { return res as any }));

  }
}
