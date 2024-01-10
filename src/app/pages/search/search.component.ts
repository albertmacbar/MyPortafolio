import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  
  constructor(private activatedRoute: ActivatedRoute,
              public productsService: ProductsService) { 

  }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe( params => {
        //console.log(params);
        //console.log(params.termino);

        this.productsService.searchProducts(params.termino);
      });
  }
}
