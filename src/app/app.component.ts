import { Component } from '@angular/core';
import { DataPageService } from './services/data-page.service';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'portafolio';

  // En el constructor es donde se realiza la inyección de dependencias, los servicios se pueden inyectar en los conponentes ya que tienen el decorador 'Inyectable'
  constructor(public dataPageService: DataPageService,
              public productsService: ProductsService) {

  }
}
