import { NgModule } from '@angular/core';

import {HomeComponent} from "./layouts/home/home.component";
import {NotFoundComponent} from "./layouts/not-found/not-found.component";
import {RouterModule, Routes} from "@angular/router";
import  {ProductsModule} from "./features/products/products.module";

const ROUTES: Routes =[
  {path:'home',component: HomeComponent},
  {path:'',redirectTo:'home',pathMatch:"full"},
  { path: 'list', loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule) },
  { path: 'users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule) },
  {path:'**',component:NotFoundComponent},
]
@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(ROUTES)
  ]
})
export class AppRoutingModule { }
