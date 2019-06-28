import { Component, OnInit } from '@angular/core';
import { IObrasList } from './../shared/obrasList';
import { PROYECTOS } from './../shared/proyectos';
import { CommunicationService } from './../shared/communication.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  
  proy: IObrasList;
  ProyL = PROYECTOS;
 
  constructor(private commun: CommunicationService) { 
    console.log(this.ProyL);
  }

  onSelected(pro: IObrasList): void {
    this.commun.proCommun(pro);
  }
  
  ngOnInit() {
  }

}
