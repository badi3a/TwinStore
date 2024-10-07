import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {Category} from "../model/category";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit{
    listProducts: Product[];
    categories:Category[];
    categoryId:any;
    constructor(private activatedRoute: ActivatedRoute) {
    }
    ngOnInit() {
      this.categoryId=this.activatedRoute.snapshot.params['id'];
      this.categories=[
        { id: 0, name: 'Cuisine & Arts Culinaires',nbrLike:10,available:true, picture: 'https://tn.jumia.is/cms/0000_Refresh2023/TBs/2/TN_Artculinaire_TB.jpg' },
        { id: 1, name: 'Decoration', nbrLike:10,available:true,picture: 'https://tn.jumia.is/cms/0000_Refresh2023/April/W17/TB/TN_Deco_TB.jpg' },
        { id: 2, name: 'Smart Phone', nbrLike:10,available:true,picture: 'https://tn.jumia.is/cms/0000_Refresh2023/April/W17/TB/TN_Smartphones_TB.jpg' },
        { id: 3, name: 'Electronics', nbrLike:10,available:true,picture: 'https://tn.jumia.is/cms/0000_Refresh2023/April/W17/TB/TN_PG_TB.jpg' },
        { id: 4, name: 'Sport', nbrLike:10,available:true,picture: 'https://tn.jumia.is/cms/0000_Refresh2023/TBs/6/sport-1.jpg' },
        { id: 5, name: 'Games', nbrLike:10,available:true,picture: 'https://tn.jumia.is/cms/0000_Refresh2023/TBs/6/PC-Gamer-Desktop-Triple-banner.jpg' }]
      this.listProducts = [
        {
          id: 1,
          name: 'Smartphone X',
          price: 799.99,
          description: 'Latest model with 128GB storage and a stunning display.',
          picture: 'https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/60/5458/1.jpg?2024',
          nbrLike: 200,
          quantity: 50,
          category: this.categories[2] // Electronics
        },
        {
          id: 2,
          name: '4K TV Ultra HD',
          price: 1200.50,
          description: 'A 55-inch 4K Ultra HD TV with smart features.',
          picture: 'https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/2995/1.jpg?9569',
          nbrLike: 320,
          quantity: 30,
          category: this.categories[3]  // Electronics
        },
        {
          id: 3,
          name: 'Leather Jacket',
          price: 149.99,
          description: 'Stylish black leather jacket for men.',
          picture: 'https://tn.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/8552/1.jpg?1672',
          nbrLike: 250,
          quantity: 100,
          category: this.categories[4]  // Fashion
        }]

    }
}
