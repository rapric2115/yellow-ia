import { Component, OnInit,Input } from '@angular/core';
import { PROYECTOS } from './../shared/proyectos';
import { CommunicationService } from './../shared/communication.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

    @Input() P = PROYECTOS;

     proyectos = [];

  constructor( private commun: CommunicationService) {
    const x = this.commun.communication$.pipe(
      map( data => this.proyectos = data )
    );
    console.log(x);
  }

  

  

  ngOnInit() {
  }


}
