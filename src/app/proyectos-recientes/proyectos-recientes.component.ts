import { Component, OnInit } from '@angular/core';
import { IObrasList } from '../shared/obrasList';
import { PROYECTOS } from './../shared/proyectos';

@Component({
  selector: 'app-proyectos-recientes',
  templateUrl: './proyectos-recientes.component.html',
  styleUrls: ['./proyectos-recientes.component.css']
})
export class ProyectosRecientesComponent implements OnInit {

  proy: IObrasList;
  ProyL = PROYECTOS;
  proyecto: any;

  constructor() { }

  

  ngOnInit() { 
    this.proyecto = this.ProyL.filter( pro => {
      return pro.subtitulo === 'En Construccion';
    });
  }

}
