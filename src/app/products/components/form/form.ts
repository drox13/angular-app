import { Component, Input, output } from '@angular/core';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {

 /* product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0
  };
  */

  private _product!: Product;

  @Input() set product(value: Product) {
    this._product = { ...value }; // <--- copia segura
  }

  get product() {
    return this._product;
  }

  newProductEvent = output<Product>();

  onSubmit(): void{
    this.newProductEvent.emit(this.product)
  }

  clean(): void{
    this._product = new Product();
  }
}
