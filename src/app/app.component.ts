import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { InfoEquipoService } from './services/info-equipo.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

// inyeccion de una dependencia
  constructor( public _infoPagina: InfoPaginaService,
    _infoEquipo: InfoEquipoService,
    _infoProductos: ProductosService) {

  }
}
