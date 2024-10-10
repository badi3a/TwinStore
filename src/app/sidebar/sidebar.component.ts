import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";
import {Category} from "../model/category";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  listCategory: Category[];
   constructor(private dataService:DataService) {
   }
   ngOnInit(){
     this.listCategory=this.dataService.listCategory;
     console.log(this.listCategory);
   }
}
