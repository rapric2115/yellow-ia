import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-motivacion',
  templateUrl: './motivacion.component.html',
  styleUrls: ['./motivacion.component.css']
})
export class MotivacionComponent implements OnInit {

  constructor(private translate: TranslateService) { 
   
    let userLang = navigator.language;   
    translate.setDefaultLang(userLang);
  }

  switchLanguage(language:string) {
    this.translate.use(language);
  }

  ngOnInit() {
  }

}
