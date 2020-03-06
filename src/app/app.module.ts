import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SwiperModule, SwiperConfigInterface,
  SWIPER_CONFIG } from 'ngx-swiper-wrapper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { GlobalComponent } from './global/global.component';
import { AppComponentService } from './services/app.component.service';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  // threshold: 50,
  spaceBetween: 1,
  slidesPerView: 5,
  centeredSlides: true,
  freeMode: true
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AppComponentService,
    GlobalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
