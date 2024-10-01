import {Category} from "./category";

export class Product{
  id: number;
  name: string;
  price: number;
  description: string;
  picture: string;
  nbrLike: number;
  quantity: number;
  category:Category;
}
