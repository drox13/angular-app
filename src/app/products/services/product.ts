import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private products: Product [] = [
    {
    id: 1,
    name: 'Mesa para comedor',
    description: 'Excelente mesa para comedor',
    price: 700
    },
    {
      id: 2,
      name: 'Teclado mecanico',
      description: 'Excelente teclado para typing',
      price: 500
    }
  ];
  constructor(){}

  findAll(): Observable<Product[]>{
    return of(this.products); // el of conviente en tipo observable
  }

}
