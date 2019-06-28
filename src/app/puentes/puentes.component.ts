import { Component, OnInit } from '@angular/core';
import { IObrasList } from '../shared/obrasList';
import { PROYECTOS } from '../shared/proyectos';

@Component({
  selector: 'app-puentes',
  templateUrl: './puentes.component.html',
  styleUrls: ['./puentes.component.css']
})
export class PuentesComponent implements OnInit {

  proy: IObrasList;
  ProyL = PROYECTOS;
  proyecto: any;
  
  constructor() { }

  ngOnInit() {
    this.proyecto = this.ProyL.filter( pro => {
      return pro.tipo === 'puente';
    });
  }
  

}
