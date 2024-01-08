import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  charged: boolean = false;   //Indicará si ya se cargó la información del servicio
  products: IProduct[] = [];

  constructor(private httpClient: HttpClient) {
    this.loadProducts();
  }

  loadProducts() {
    this.httpClient.get('https://angular-portfolio-159d0-default-rtdb.firebaseio.com/products_idx.json')
    // .subscribe( (resp: any) => {
    .subscribe( (resp: IProduct[]) => {
      console.log(resp);

      this.products = resp;

      // setTimeout(() => {
        this.charged = true;        
      // }, 2000);
    });
  }
}
