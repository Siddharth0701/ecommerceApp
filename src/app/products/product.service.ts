import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../site-layout/category';
import {Product} from './product'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }
  createproduct(productBody):Observable<Product>{
   const  baseUrl="http://localhost:3000/product";
   return this.httpClient.post<Product>(baseUrl,productBody);

  }
  viewproduct():Observable<Product>{
    const  baseUrl="http://localhost:3000/product/";
    return this.httpClient.get<Product>(baseUrl);

   }
   updateproduct(productId,productBody) :Observable<Product>{
    const  baseUrl="http://localhost:3000/product/"+productId;
    return this.httpClient.put<Product>(baseUrl,productBody);

   }
   deleteproduct(productId) :Observable<Product>{
    const  baseUrl="http://localhost:3000/product/"+productId;
    return this.httpClient.delete<Product>(baseUrl);

   }
   serachCategoryproduct(categoryId) :Observable<Product>{
    const  baseUrl="http://localhost:3000?product/category"+categoryId;
    return this.httpClient.get<Product>(baseUrl);

   }
   serachDateproduct(dateParam):Observable<Product>{
    const  baseUrl="http://localhost:3000/product/date"+dateParam;
    return this.httpClient.get<Product>(baseUrl);

   }
   getCategory(){
    const  categoryUrl="http://localhost:3000/categories";
     return this.httpClient.get<Category>(categoryUrl);
   }
}
