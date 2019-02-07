import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { InfoPordictoDesc } from '../../interfaces/info-productodesc.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productos: InfoPordictoDesc;
  id: String;

  constructor( private route: ActivatedRoute,
                public productosService: ProductosService) { }

  ngOnInit() {

    this.route.params
      .subscribe( parametros => {

        // console.log(parametros['id']);
        this.productosService.getProducto(parametros['id'])
        .subscribe( (producto: InfoPordictoDesc) => {
          // setiar las propiedades a el html
          this.id = parametros['id'];
          this.productos = producto;
          // console.log(producto);
        });

      });
  }

}
