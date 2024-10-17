import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import {ListProductComponent} from "./list-product/list-product.component";
import {CardProductComponent} from "./card-product/card-product.component";
import {HomeProductComponent} from "./home-product/home-product.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    ProductsComponent,
    ListProductComponent,
    CardProductComponent,
    HomeProductComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
