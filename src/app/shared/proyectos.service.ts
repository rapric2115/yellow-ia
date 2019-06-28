import { Injectable } from '@angular/core';
import { IObrasList } from './obrasList';
import { PROYECTOS } from './proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  getProducts(): IObrasList[] {
    return PROYECTOS
  }

  constructor() { }
}
