import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class CommunicationService {
    private projectCommunication = new Subject<any>();
    communication$ = this.projectCommunication.asObservable();

    constructor () {}

    proCommun(commun: any) {
        this.projectCommunication.next(commun);
        console.log(commun);
    }
}
