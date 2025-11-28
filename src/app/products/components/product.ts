import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product';

import { Form } from './form/form';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, Form],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class ProductComponent {
onUpdateProduct(arg0: any) {
throw new Error('Method not implemented.');
}

  // LISTA DE PRODUCTOS COMO SIGNAL
  products = signal<Product[]>([]);

  // PRODUCTO SELECCIONADO PARA EL FORMULARIO
  productSelected = signal<Product>({
    id: 0,
    name: '',
    description: '',
    price: 0
  });

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.findAll().subscribe({
      next: (data) => {
        console.log("respuesta del backend:", data);
        this.products.set(data); // <-- AQUÍ SE REFRESCA AUTOMÁTICO
      }
    });
  }

  addProduct(product: Product): void {
    this.productService.create(product).subscribe({
      next: () => {
        this.loadProducts(); // <-- REFRESCAR
        this.clean();
      }
    });
  }

  clean(): void {
    this.productSelected.set({
      id: 0,
      name: '',
      description: '',
      price: 0
    });
  }
}
