import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
   }

   switchLanguage(language:string) {
    this.translate.use(language);
  }

  ngOnInit() {
  }

}
