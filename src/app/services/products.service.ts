import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  charged: boolean = false;   //Indicará si ya se cargó la información del servicio
  products: IProduct[] = [];
  productsFiltred: IProduct[] = [];

  constructor(private httpClient: HttpClient) {
    this.loadProducts();
  }

  loadProducts() {

    // Para hacer que este método regrese algo asíncrono, se necesita que trabaje en base a promesas (promise), nueva carcterística del ECMAScript v6
    // La 'promise' permite ejecutar código hasta que se resuelva lo indicado en la promesa

    return new Promise( (resolve, rejected) => {
      this.httpClient.get('https://angular-portfolio-159d0-default-rtdb.firebaseio.com/products_idx.json')
      // .subscribe( (resp: any) => {
      .subscribe( (resp: IProduct[]) => {
        console.log(resp);
  
        this.products = resp;
  
        // setTimeout(() => {
          this.charged = true;
        // }, 2000);

        resolve();
      });  
    });

    // this.httpClient.get('https://angular-portfolio-159d0-default-rtdb.firebaseio.com/products_idx.json')
    // // .subscribe( (resp: any) => {
    // .subscribe( (resp: IProduct[]) => {
    //   console.log(resp);

    //   this.products = resp;

    //   // setTimeout(() => {
    //     this.charged = true;        
    //   // }, 2000);
    // });
  }

  getProductDetails(productId: string) {
    // this.httpClient.get('https://angular-portfolio-159d0-default-rtdb.firebaseio.com/products/'+productId+'.json')
    //   .subscribe( (resp: any) => {
    //     console.log(resp);
    //   });

    //No se ejecuta este subscribe sino que solo regresa la definición del observable, ya que donde requiero hacer el subscribe y obtener los datos en el otro componente
    return this.httpClient.get('https://angular-portfolio-159d0-default-rtdb.firebaseio.com/products/'+productId+'.json');

    // Los Backticks permiten definir cualquier string ocualquier expresión de javascritp válida 
    // return this.httpClient.get(`https://angular-portfolio-159d0-default-rtdb.firebaseio.com/products/${productId}.json`);
  }

  searchProducts(termino: string) {
    // // Filter barre el arreglo indicado y regresa un nuevo arreglo con los resultados de la búsqueda efectuada
    // this.productsFiltred = this.products.filter( product => {
    //   return true;
    // });

    // console.log(this.productsFiltred);
    
    // return this.productsFiltred;



    // Debemos ejecutar el filtro unicamente cuando ya haya datos, es decir, solo cuando ya se haya hecho la búsqueda de los productos
    if (this.products.length === 0) {
      //console.log('this.products.length === 0');
      //Si no existen los productos, cargar los productos
      this.loadProducts().then( () => {
        // El .then() es una llamada de callback y se ejecuta una vez terminado el proceso del método llamado, en este caso, el método 'loadProducts()'
        //Aplicar filtro 
        this.filterProducts(termino);
      });
    }
    else {
      //console.log('this.products.length > 0');
      //Aplicar filtro
      this.filterProducts(termino);
    }
  }

  private filterProducts(termino: string) {
    //Pulga o elimina los productos para una nueva búsqueda
    //this.productsFiltred.length = 0;
    this.productsFiltred = [];

    // //Regresa todos los productos, es solo para pruebas
    // this.productsFiltred = this.products.filter( product => {
    //   return true;
    // });
    // console.log(this.productsFiltred);
    
    //Filter barre el arreglo indicado y regresa un nuevo arreglo con los resultados de la búsqueda efectuada
    //Forma 1
    // this.productsFiltred = this.products.filter(product => { 
    //   if ((product.titulo.indexOf(termino) >= 0) || (product.categoria.indexOf(termino) >= 0)) {
    //     return true;
    //   }
    // });

    //Para evitar el case sensitive en la búsqueda, se va a convertir todo a minusculas
    termino = termino.toLocaleLowerCase();

    //Forma 2
    this.products.forEach( product => {
      // if ((product.titulo.indexOf(termino) >= 0) || (product.categoria..indexOf(termino) >= 0)) {
      if ((product.titulo.toLocaleLowerCase().indexOf(termino) >= 0) || (product.categoria.toLocaleLowerCase().indexOf(termino) >= 0)) {
        this.productsFiltred.push(product);
      }
    });

    //console.log(this.productsFiltred);

    return this.productsFiltred;
  }
}
