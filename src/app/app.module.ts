import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { BlogComponent } from './pages/blog/blog.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    BlogComponent,
    DocumentationComponent,
    ContactComponent
  ],
  //Los módulos van en los 'imports'
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,     //Este módulo es el que permite realizar peticiones Put, Get, Patch, Delete, etc a servideres REST
    TranslocoRootModule,
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
