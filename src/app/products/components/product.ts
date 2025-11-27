import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product';
import { Product } from '../models/product';
import { Form } from "./form/form";

@Component({
  selector: 'app-product',
  imports: [Form],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent implements OnInit{

  products: Product[] = [];
  productSeleted: Product = new Product();

  constructor( private service: ProductService){ }

  ngOnInit(): void {
    this.service.findAll().subscribe(products =>{
      this.products = products;
    })
  }

  addProduct(product: Product){
    if(product.id > 0){
      this.products = this.products.map(prod => {
        if(prod.id == product.id){
          return{...product}
        }
        return prod;
      })
    }else{
      this.products.push(product) // mutable en RAM
      product.id = new Date().getTime();

      // this.products = [... this.products, {...product, id: new Date().getTime() }]// inmutable en RAM importante en react
    }
    this.productSeleted  = new Product();

  }

  onUpdateProduct(productRow: Product){
    this.productSeleted = productRow;
  }

  onRemoveProduct(id: number): void{
    this.products = this.products.filter(product => product.id != id)
  }

}
