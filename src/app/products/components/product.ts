import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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

  constructor( private service: ProductService, private cd: ChangeDetectorRef){ }


  private render(): void{
    this.cd.detectChanges(); // <-- fuerza el render
  }

  ngOnInit(): void {
    this.service.findAll().subscribe(products =>{
      this.products = products;
      this.render();
    })
  }

  addProduct(product: Product){
    if(product.id > 0){ // aca edita
      this.service.update(product).subscribe( productUpdate => {

        this.products = this.products.map(prod => {
          if(prod.id == product.id){
            return{...productUpdate}
          }
          return prod;
        });
        this.render();

      });
    }else{ // aca crea
      this.service.create(product).subscribe(productNew => {
        // this.products.push({... productNew }) // mutable en RAM

        this.products = [... this.products, {...productNew }]// inmutable en RAM importante en react
        this.render()
      });

    }
    this.productSeleted  = new Product();
  }

  onUpdateProduct(productRow: Product){
    this.productSeleted = {... productRow};
  }

  onRemoveProduct(id: number): void{
    this.products = this.products.filter(product => product.id != id)
  }

}
