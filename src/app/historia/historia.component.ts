import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {

  constructor(private translate: TranslateService) { 
    translate.setDefaultLang('es');
  }

  yellow:any [] = [
    {
      'id': 1,
      'title': 'Equipo Yellow',
      'url' : '../../assets/equipo-Yellow/equipo-yellow.webp'
    },
    {
      'id': 2,
      'title': 'Equipo Taller Yellow',
      'url': '../../assets/equipo-Yellow/equipo-taller.webp'
    },
    {
      'id': 3,
      'title': 'Equipo Presupuesto Yellow',
      'url': '../../assets/equipo-Yellow/equipo-presupuesto-yellow.webp'
    },
     {
       'id': 4,
       'title': 'Equipo Imagen Corporativa',
       'url': '../../assets/equipo-Yellow/equipo-dic.webp'
     },
     {
       'id': 5,
       "title": "Equipo Construcción",
       'url': "../../assets/equipo-Yellow/equipo-construccion.webp"
     },
     {
       'id': 6,
       "title": "Equipo RRHH y Finanzas",
       'url': "../../assets/equipo-Yellow/equipo-rh-finanzas.webp"
     },
     {
       'id': 7,
       "title": "Equipo Administrativo",
       'url': "../../assets/equipo-Yellow/equipo-administrativo.webp"
     }
  ]

  ngOnInit() {
  }

}
