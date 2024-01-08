import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { DataPageService } from 'src/app/services/data-page.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
  anio = new Date().getFullYear();
  isCollapsed = false;

  constructor(private translocoService: TranslocoService,
              public dataPageService: DataPageService) {
  }

  ngOnInit(): void {
  }

  changeIdiom(language: string) {
      this.translocoService.setActiveLang(language);
  }
}
