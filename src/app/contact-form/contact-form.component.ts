import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from './../shared/services/message.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(private translate: TranslateService,
    public _Message: MessageService) {
      
    let userLang = navigator.language;   
    translate.setDefaultLang(userLang);
   }

   switchLanguage(language:string) {
    this.translate.use(language);
  }

  contactForm(form) {
    this._Message.sendMessage(form).subscribe( () => {
      alert('Mensaje Enviado correctamente');
    })
  }

  ngOnInit() {
  }

}
