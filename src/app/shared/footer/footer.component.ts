import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
// traer el año actual.
  anio: number = new Date().getFullYear();
  constructor(public _services: InfoPaginaService) { }

  ngOnInit() {
  }

}
