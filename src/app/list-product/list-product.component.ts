import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {Category} from "../model/category";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit{
    listProducts: Product[];
    categories:Category[];
    categoryId:any;
    constructor(private activatedRoute: ActivatedRoute, private data:DataService) {
    }
    ngOnInit() {
    this.activatedRoute.params.subscribe(
        (params)=>{
          this.categoryId=this.activatedRoute.snapshot.params['id'];
        })
      this.categories= this.data.listCategory;
      this.listProducts=this.data.listProducts;
      console.log('list'+this.listProducts);
      console.log('list 2'+this.categories);
    }
}
