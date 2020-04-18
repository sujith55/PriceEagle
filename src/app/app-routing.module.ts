import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';


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
  }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
