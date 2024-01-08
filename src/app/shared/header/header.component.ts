import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { DataPageService } from 'src/app/services/data-page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private translocoService: TranslocoService,
              public dataPageService: DataPageService) {
  }

  ngOnInit(): void {
    
  }

}
