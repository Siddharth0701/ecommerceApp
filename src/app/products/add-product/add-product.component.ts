import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService:ProductService ) { }

  ngOnInit(): void {

  }
  addNewProduct( form){
    console.log(form.value);
    let newProduct={
      id:112,
      categoryId:form.value.product_category,
      productName:form.value.product_name,
      description:form.value.product_description,
      rating:form.value.product_rating,
      price:form.value.product_price,
      productImg:'',
      IsAvailable:1,
      color:form.value.product_color,
      reviews:form.value.product_category,
    };
    console.log(newProduct);
    this.productService.createproduct(newProduct).subscribe(data=>{
      console.log(data);
    })


  }

}
