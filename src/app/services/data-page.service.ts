import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDataPage } from '../interfaces/dataPage.interface';

// Ya no es necesario declarar los servicios en el apartado de providers de 'app.module'
// porque con este inyectable o decorador del servicio, con el 'providedIn' se indica a que nivel se quiere que se inyecte automáticamente
@Injectable({
  providedIn: 'root'
})

// Un 'servicio' sirve para compartir información global a lo largo de toda la aplicación 
// Se puede crear un servicio para poder leer el contenido de un archivo JSON desde cualquier páginas de la aplicación
export class DataPageService {
  //dataPage: any = {};
  dataPage: IDataPage = {};
  dataWorkTeam: any[] = [];
  charged: boolean = false;   //Indicará si ya se cargó la información del servicio

  constructor(private httpClient: HttpClient) { 
    console.log('DataPageService cargado...');

    // Aquí se necesita crear algo que permita leer el archivo JSON y tomas sus propiedades para que puedan ser utilizadas en las páginas
    // Para ello se necesita un módulo llamado 'HttpClientModule' que necesita ser importado en los 'imports' del 'app.module'
    // Y en este servisio se inyectar el 'HttpClient' para poder realizar peticiones Put, Get, Patch, Delete, etc a servideres REST, archivos JSON locales

    //Leer el archivo JSON local
    //this.httpClient.get('http://localhost:
    this.httpClient.get('assets/data/page-data.json')
      //.subscribe( resp => {
      // .subscribe( (resp: any) => {
      .subscribe( (resp: IDataPage) => {
        // console.log(resp);

        //De esta forma lo marca como error porque no sabe si 'resp' realmente tiene una propiedad llamada 'ex',
        //Se solucciona o especificando el tipo de resp en el subscribe o de tipo any
        //              o indicnado que de resp se va a tomar la propiedad 'ex' entre corchetes
        // console.log(resp.ex);
        //console.log(resp['ex']);

        this.charged = true;
        this.dataPage = resp;
      });

      this.loadWorkTemInfo();
  }

  loadWorkTemInfo() {
    this.httpClient.get('https://angular-portfolio-159d0-default-rtdb.firebaseio.com/team.json')
      .subscribe( (resp: any) => {
        console.log(resp);
        this.dataWorkTeam = resp;
        console.log(this.dataWorkTeam);
      });
  }
}
