import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoProducto } from '../interfaces/info-producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  infoProducto: InfoProducto[] = [];
  productoFiltrado: InfoProducto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos() {
    return new Promise( (resolve, reject) => {


    this.http.get('https://angulas-html-e9046.firebaseio.com/productos_idx.json')
    .subscribe( (resp: InfoProducto[]) => {

        // console.log(resp);
        this.infoProducto = resp;
        this.cargando = false;
        resolve();
       // setTimeout(() => {
        //  this.cargando = false;
       // }, 2000);
      });
    });


  }
  getProducto( id: string ) {
    return this.http.get(`https://angulas-html-e9046.firebaseio.com/productos/${id}.json`);
  }

  buscarPorducto( termino: string ) {

    if (this.infoProducto.length === 0) {
      // cargar productos
      this.cargarProductos().then(() => {
        // despues de tener los productos
        // aplicar filtro
      this.filtrarProductos(termino);
      });
    } else {
      // aplicar el filtro
      this.filtrarProductos(termino);
    }
    // console.log( this.productoFiltrado);
  }
  private filtrarProductos( termino: string) {
    // console.log( this.infoProducto);
    this.productoFiltrado = [];
    termino = termino.toLocaleLowerCase();
    this.infoProducto.forEach( prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
        if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0 ) {
          this.productoFiltrado.push( prod);
        }
    });
  }
}
