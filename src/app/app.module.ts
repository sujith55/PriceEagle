import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
// import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

import { GlobalComponent } from './global/global.component';
import { AppComponentService } from './services/app.component.service';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CategoryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // NgxUsefulSwiperModule
  ],
  providers: [
    AppComponentService,
    GlobalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
