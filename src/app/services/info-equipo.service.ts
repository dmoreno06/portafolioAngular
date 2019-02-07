import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoEquipo } from '../interfaces/info-equipo.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoEquipoService {
  equipo: InfoEquipo = {};
  cargaData = false;

  constructor( private http: HttpClient) {
    this.cargarEquipo();
  }

// metodo para cargar la informacion
  private cargarEquipo() {
    this.http.get('https://angulas-html-e9046.firebaseio.com/equipo.json')// definicion de donde esta el archivo.
      .subscribe( (resp: InfoEquipo) => {
        this.cargaData = true;
        this.equipo = resp;
      });
  }
}
