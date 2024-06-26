import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectorService {
  fooSubject : Subject<boolean> = new Subject<boolean>();
  fooStream : Observable<boolean> = this.fooSubject.asObservable();
  constructor() { }

  singIn(login: boolean){
    this.fooSubject.next(login);
  }
}
