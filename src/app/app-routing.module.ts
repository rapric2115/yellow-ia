import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { TeamYellowComponent } from './team-yellow/team-yellow.component';
import { YellowMmvComponent } from './yellow-mmv/yellow-mmv.component';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';
import { ValoresComponent } from './valores/valores.component';
import { MotivacionComponent } from './motivacion/motivacion.component';
import { PoliticasCalidadComponent } from './politicas-calidad/politicas-calidad.component';
import { PoliticasSeguridadComponent } from './politicas-seguridad/politicas-seguridad.component';
import { ProyectosRecientesComponent } from './proyectos-recientes/proyectos-recientes.component';
import { PuentesComponent } from './puentes/puentes.component';
import { HistoriaComponent } from './historia/historia.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  { path: 'proyectos', component: ProyectosComponent},
  {path: 'genteYellow', component: TeamYellowComponent},
  { path: 'Proyectos-Recientes', component: ProyectosRecientesComponent},
  { path: 'puentes', component: PuentesComponent},
  { path: 'sobre-yellow', component: HistoriaComponent},
  { path: 'descripcion-proyectos', component: ProjectDetailsComponent},
  {path: 'yellow', component: YellowMmvComponent,
    children : [
      { path: 'mision', component: MisionComponent },
      { path: 'vision', component: VisionComponent},
      { path: 'valores', component: ValoresComponent},
      { path: 'motivacion', component: MotivacionComponent},
      { path:'calidad', component: PoliticasCalidadComponent},
      { path: 'seguridad', component: PoliticasSeguridadComponent} 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
exports: [RouterModule]
})
export class AppRoutingModule { }
