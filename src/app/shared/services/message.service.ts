import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  contactForm = '/contacto';
  domainUrl = 'http://yellow-ia.com:3000';

  constructor(private _http: HttpClient) { }

  sendMessage(body): Observable<any> {
    const uri = `${this.domainUrl + this.contactForm }`;

    return this._http.post(uri, body, { responseType: 'text' });
  }

}
