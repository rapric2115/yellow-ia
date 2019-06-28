import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-somos-yellow',
  templateUrl: './somos-yellow.component.html',
  styleUrls: ['./somos-yellow.component.css']
})
export class SomosYellowComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
   }

  ngOnInit() {
  }

}
