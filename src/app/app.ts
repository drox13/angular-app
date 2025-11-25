import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from "./products/components/product";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'HOLA MUNDO angular-app';
  enabled: boolean = false;

  courses: string[] = ['Angular', 'Spring boot', 'React'];

  setEnabled(): void{
    this.enabled= this.enabled? false: true;
    console.log('hemos hecho click en setEnabled')
  }
}
