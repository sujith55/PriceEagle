import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import * as bootstrap from "bootstrap";
import * as $ from "jquery";

import { GlobalComponent } from './global/global.component';
import { AppComponentService } from './services/app.component.service';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
import { MaincategoriesComponent } from './maincategories/maincategories.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { PortalFeedbackComponent } from './portal-feedback/portal-feedback.component';
import { BudgetshopComponent } from './budgetshop/budgetshop.component';
import { SourcepageComponent } from './sourcepage/sourcepage.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CategoryComponent,
    FooterComponent,
    MaincategoriesComponent,
    DetailpageComponent,
    PortalFeedbackComponent,
    BudgetshopComponent,
    SourcepageComponent,
    AboutComponent,
    PrivacyComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    // FontAwesomeModule
    // NgxUsefulSwiperModule
  ],
  providers: [
    AppComponentService,
    GlobalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
