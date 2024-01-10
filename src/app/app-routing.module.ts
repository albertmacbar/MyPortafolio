import { NgModule } from '@angular/core';
//El RouteModule le indica a Angular si son rutas principales o rutas hijas
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { BlogComponent } from './pages/blog/blog.component';
import { DocumentationComponent } from './pages/documentation/documentation.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SearchComponent } from './pages/search/search.component';

//Aquí se especifican las rutas de la pagina
const routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  // { path: 'item', component: ItemComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'search/:termino', component: SearchComponent },
  //Si la ruta no coincide con ninguna de las anteriores, nos dirigirá a '' que arriba menciona que mostrará el PortafolioComponent
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  //Sirve para declarar las rutas hijas
  // imports: [RouterModule.forChild(routes)],

  //Sirve para declarar las rutas principales de la raís de la aplicación
  //El 'useHash: true' sirve para que los navegadores web sepan que lo que viene después no es un directorio, sino una parte de la ruta del index.html
  imports: [RouterModule.forRoot(routes, {useHash: true})],

  //Se exporta el 'RouterModule' para que pueda ser utilizado fuera de este módulo
  exports: [RouterModule]
})

//Se exporta el AppRoutingModule porque se neceita usar desde otra clase 
export class AppRoutingModule { 

}
