import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-politicas-calidad',
  templateUrl: './politicas-calidad.component.html',
  styleUrls: ['./politicas-calidad.component.css']
})
export class PoliticasCalidadComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
  }

  switchLanguage(language:string) {
    this.translate.use(language);
  }

  ngOnInit() {
  }

}
