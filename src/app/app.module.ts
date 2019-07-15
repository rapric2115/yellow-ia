import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { TeamYellowComponent } from './team-yellow/team-yellow.component';
import { MisionComponent } from './mision/mision.component';
import { YellowMmvComponent } from './yellow-mmv/yellow-mmv.component';
import { VisionComponent } from './vision/vision.component';
import { ValoresComponent } from './valores/valores.component';
import { CountdownComponent } from './countdown/countdown.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MotivacionComponent } from './motivacion/motivacion.component';
import { PoliticasCalidadComponent } from './politicas-calidad/politicas-calidad.component';
import { PoliticasSeguridadComponent } from './politicas-seguridad/politicas-seguridad.component';
import { ProyectosRecientesComponent } from './proyectos-recientes/proyectos-recientes.component';
import { PuentesComponent } from './puentes/puentes.component';
import { HistoriaComponent } from './historia/historia.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { SomosYellowComponent } from './somos-yellow/somos-yellow.component';
import { MvvComponent } from './mvv/mvv.component';
import { MessageService } from './shared/services/message.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProyectosComponent,
    TeamYellowComponent,
    MisionComponent,
    YellowMmvComponent,
    VisionComponent,
    ValoresComponent,
    CountdownComponent,
    ContactFormComponent,
    MotivacionComponent,
    PoliticasCalidadComponent,
    PoliticasSeguridadComponent,
    ProyectosRecientesComponent,
    PuentesComponent,
    HistoriaComponent,
    SocialMediaComponent,
    ProjectDetailsComponent,
    SomosYellowComponent,
    MvvComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
