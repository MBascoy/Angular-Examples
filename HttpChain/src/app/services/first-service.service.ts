import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface messageResponse {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {

  constructor(private http:HttpClient) { }

  getInfo(){
    return this.http.get<messageResponse>("http://127.0.0.1:3000/first")
  }
}
