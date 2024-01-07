import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
  anio = new Date().getFullYear();
  isCollapsed = false;

  constructor(private translocoService: TranslocoService) {
  }

  ngOnInit(): void {
  }

  changeIdiom(language: string) {
      this.translocoService.setActiveLang(language);
  }
}
