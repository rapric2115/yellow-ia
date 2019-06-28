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
      'url' : '../../assets/equipo-Yellow/equipo-yellow.jpg'
    },
    {
      'id': 2,
      'title': 'Equipo Taller Yellow',
      'url': '../../assets/equipo-Yellow/equipo-taller.jpg'
    },
    {
      'id': 3,
      'title': 'Equipo Presupuesto Yellow',
      'url': '../../assets/equipo-Yellow/equipo-presupuesto-yellow.jpg'
    },
     {
       'id': 4,
       'title': 'Equipo Imagen Corporativa',
       'url': '../../assets/equipo-Yellow/equipo-dic.jpg'
     },
     {
       'id': 5,
       "title": "Equipo Construcción",
       'url': "../../assets/equipo-Yellow/equipo-construccion.jpg"
     },
     {
       'id': 6,
       "title": "Equipo RRHH y Finanzas",
       'url': "../../assets/equipo-Yellow/equipo-rh-finanzas.jpg"
     },
     {
       'id': 7,
       "title": "Equipo Administrativo",
       'url': "../../assets/equipo-Yellow/equipo-administrativo.jpg"
     }
  ]

  ngOnInit() {
  }

}
