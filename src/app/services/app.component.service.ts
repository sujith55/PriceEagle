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
}
