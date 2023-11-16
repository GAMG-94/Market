import { Component, OnInit } from '@angular/core';
import { Producto } from 'app/models/products.model';
import { ProductsService } from 'app/service/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  producto: Producto[] = [];

  constructor(private productoService: ProductsService) { }

  ngOnInit(): void {
    this.productoService.getProduct()
    .subscribe( {
      next: (producto: Producto[]) => {
        this.producto = producto
        console.log(this.producto);
      },
      error:(error: Producto[])=> {
        console.error(error);
      },
      complete:() => {
        console.log('completado');
      }
    })
  }
}
