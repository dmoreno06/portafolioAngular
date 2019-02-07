import { Component, OnInit } from '@angular/core';
import { InfoEquipoService } from '../../services/info-equipo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( public servicesEquipo: InfoEquipoService) { }

  ngOnInit() {
  }

}
