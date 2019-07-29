import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-yellow-mmv',
  templateUrl: './yellow-mmv.component.html',
  styleUrls: ['./yellow-mmv.component.css']
})
export class YellowMmvComponent implements OnInit {

  constructor( private translate: TranslateService) {
    
    let userLang = navigator.language;   
    translate.setDefaultLang(userLang);
    
  }

  ngOnInit() {
  }

}
