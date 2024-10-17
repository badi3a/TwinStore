import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import {HomeProductComponent} from "./home-product/home-product.component";
import {CardProductComponent} from "./card-product/card-product.component";
import {ListProductComponent} from "./list-product/list-product.component";

const routes: Routes = [
     {path:'',component: HomeProductComponent, children:
      [ {path:'card',component: CardProductComponent},
      {path:':id',component:ListProductComponent},]},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
