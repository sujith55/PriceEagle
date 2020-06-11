import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { MaincategoriesComponent } from './maincategories/maincategories.component';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { PortalFeedbackComponent } from './portal-feedback/portal-feedback.component';
import { BudgetshopComponent } from './budgetshop/budgetshop.component';
import { SourcepageComponent } from './sourcepage/sourcepage.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path:'shop',
    component: HomeComponent
  },
  {
    path:'',
    redirectTo: '/shop',
    pathMatch: 'full'
  },
  {
    path:'category',
    component: CategoryComponent
  },
  {
    path:':categoryUrl',
    component: CategoryComponent
  },
  {
    path:'category/:categoryId',
    component: CategoryComponent
  },
  {
    path:'maincat/:cateId/:pid',
    component:MaincategoriesComponent
  },
  {
    path:'feedback/portal',
    component:PortalFeedbackComponent
  },
  {
    path:'details/:productId',
    component:DetailpageComponent
  },
  {
    path:':categoryUrl/:productId',
    component:DetailpageComponent
  },
  {
    path:'detail/:categoryId/:productId',
    component:DetailpageComponent
  },
  {
    path:':categoryUrl/:productId/feedback/portal',
    component:PortalFeedbackComponent
  },
  {
    path:'shop/budget/budgetshop/:categoryId/:lowPrice/:highPrice',
    component:BudgetshopComponent
  },
  {
    path:'sourcepage/:sourceId/Category/:categoryName/productsource/:productId',
    component:SourcepageComponent
  },
  {
    path:'shop/home/about',
    component:AboutComponent
  },
  {
    path:'shop/home/privacy',
    component:PrivacyComponent
  },
  {
    path:'shop/home/contact',
    component:ContactComponent
  },
  {
    path:'shop/home/profile',
    component:ProfileComponent
  }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
