import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MySubjectService {

  constructor() { }

  private messageSubject = new Subject<string>();

  messages$ = this.messageSubject.asObservable();

  sendMessage(message: string){
    this.messageSubject.next(message)
  }
}
