import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent implements OnInit{

  products: Product[] = [];

  constructor( private service: ProductService){ }

  ngOnInit(): void {
    this.service.findAll().subscribe(products =>{
      this.products = products;
    })
  }


}
