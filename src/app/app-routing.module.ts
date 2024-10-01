import { NgModule } from '@angular/core';

import {HomeComponent} from "./home/home.component";
import {ListProductComponent} from "./list-product/list-product.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {RouterModule, Routes} from "@angular/router";
const ROUTES: Routes =[
  {path:'home',component: HomeComponent},
  {path:'list',component: ListProductComponent},
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'**',component:NotFoundComponent},

]
@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(ROUTES)
  ]
})
export class AppRoutingModule { }
