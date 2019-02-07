import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargaData = false;

  constructor( private http: HttpClient) {
    this.cargarInfo();
  }

// metodo para cargar la informacion
  private cargarInfo() {
    // console.log('hola mundo');
    // leer el archivo json
    this.http.get('assets/data/data-pagina.json')// definicion de donde esta el archivo.
      .subscribe( (resp: InfoPagina) => {
        this.cargaData = true;
        this.info = resp;
        // console.log(resp);
        // console.log( resp['titulo'] );
      });
  }
}
