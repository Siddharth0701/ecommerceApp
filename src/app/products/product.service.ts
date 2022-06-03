import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }
  createproduct(productBody){
   const  baseUrl="http://localhost:3000/products";
   return this.httpClient.post(baseUrl,productBody);

  }
  viewproduct(productId){
    const  baseUrl="http://localhost:3000/product/"+productId;
    return this.httpClient.get(baseUrl);

   }
   updateproduct(productId,productBody){
    const  baseUrl="http://localhost:3000/product/"+productId;
    return this.httpClient.put(baseUrl,productBody);

   }
   deleteproduct(productId){
    const  baseUrl="http://localhost:3000/product/"+productId;
    return this.httpClient.delete(baseUrl);

   }
   serachCategoryproduct(categoryId){
    const  baseUrl="http://localhost:3000/product/category"+categoryId;
    return this.httpClient.get(baseUrl);

   }
   serachDateproduct(dateParam){
    const  baseUrl="http://localhost:3000/product/date"+dateParam;
    return this.httpClient.get(baseUrl);

   }
}
