import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-valores',
  templateUrl: './valores.component.html',
  styleUrls: ['./valores.component.css']
})
export class ValoresComponent implements OnInit {

  constructor( private translate: TranslateService) { 
     
    let userLang = navigator.language;   
    translate.setDefaultLang(userLang);
  }


  ngOnInit() {
  }

}
