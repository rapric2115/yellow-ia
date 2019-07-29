import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css']
})
export class VisionComponent implements OnInit {

  constructor( private translate: TranslateService) { 
    
    let userLang = navigator.language;   
    translate.setDefaultLang(userLang);
  }

  ngOnInit() {
  }

}
