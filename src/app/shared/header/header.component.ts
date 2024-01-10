import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { DataPageService } from 'src/app/services/data-page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private translocoService: TranslocoService,
              public dataPageService: DataPageService,
              private router: Router) {
  }

  ngOnInit(): void {
    
  }

  searchProduct(termino: string) {
    //Valida que se haya tecleado al menos un caracter
    if (termino.length < 1)
      return;

    //console.log(termino);

    this.router.navigate(['/search', termino]);
  }
}
