import { Component, OnInit, Input } from "@angular/core";
import { Observable, Observer, fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import * as $ from "jquery";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Priceeagle";
  isConnected: boolean;
  constructor() {
    // this.createOnline$().subscribe(isOnline => console.log(isOnline));
  }
  ngOnInit(): void {
    setInterval(()=>{
      this.createOnline$();
      // console.log('your connection:'+this.isConnected);
    }, 15000);
    this.createOnline$().subscribe(isOnline => this.isConnected = isOnline);
  }
  createOnline$() {
    return merge<boolean>(
      fromEvent(window, 'offline').pipe(map(() => false)),
      fromEvent(window, 'online').pipe(map(() => true)),
      new Observable((sub: Observer<boolean>) => {
        sub.next(navigator.onLine);
        sub.complete();
      }));
  }
  reloadPage(){
    location.reload();
  }
}
