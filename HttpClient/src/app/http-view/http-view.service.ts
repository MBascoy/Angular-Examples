import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface messageRequest {
  userId: number;
  id:number;
  name:string;
  completed:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class HttpViewService {

  constructor(private http:HttpClient) { }

  getInfo(){
    return this.http.get<messageRequest[]>("http://127.0.0.1:8080/api/members")
  }
}
