import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { IProductDetail } from 'src/app/interfaces/productDetail';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {
  productId: string;
  productDetail: IProductDetail;

  constructor(private activatedRoute: ActivatedRoute,
              private productsService: ProductsService,
              private translocoService:TranslocoService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe( parameters => {
        // console.log(parameters);
        //console.log(parameters.id);
        this.productId = parameters.id;

        this.productsService.getProductDetails(parameters.id)
          // .subscribe( (resp: any) => {
          .subscribe( (resp: IProductDetail) => {
            //console.log(resp);
            //console.log(resp.producto);

            this.productDetail = resp;
          });
      });
  }
}
