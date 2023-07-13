import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { messageResponse } from './first-service.service';

@Injectable({
  providedIn: 'root'
})
export class SecondServiceService {

  constructor(private http:HttpClient) { }

  getInfo(){
    return this.http.get<messageResponse>("http://127.0.0.1:3000/second")
  }
}
