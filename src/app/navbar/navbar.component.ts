import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
   }

   public innerWidth: any;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    console.log (this.innerWidth);

    if(this.innerWidth < 500) {
      const open = document.getElementById("globe");
      open.hasAttribute('fill');
      open.setAttribute('fill', "#fff");
    }

  }

  switchLanguage(language:string) {
    this.translate.use(language);
  }

}
