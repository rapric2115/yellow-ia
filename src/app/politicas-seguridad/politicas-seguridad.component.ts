import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-politicas-seguridad',
  templateUrl: './politicas-seguridad.component.html',
  styleUrls: ['./politicas-seguridad.component.css']
})
export class PoliticasSeguridadComponent implements OnInit {

  constructor(private translate: TranslateService) { 
    translate.setDefaultLang('es');
  }

  switchLanguage(language:string) {
    this.translate.use(language);
  }
  
  ngOnInit() {
  }

}
