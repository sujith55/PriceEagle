import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubcatComponentService{
  private url='/assets/schemas/subcats.json';
  constructor(private http: HttpClient){

  }
  public getSubcats(): Observable<any>{
    return this.http.get(this.url);
  }
}
