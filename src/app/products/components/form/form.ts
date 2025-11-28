import { Component, Input, output } from '@angular/core';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
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

  @Input() product: Product ={
    id: 0,
    name: '',
    description: '',
    price: 0
  }

  newProductEvent = output<Product>();

  onSubmit(): void{
    this.newProductEvent.emit(this.product)
  }

  clean(): void{
    this.product = new Product();
  }
}
