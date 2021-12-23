import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface messageRequest {
  userId: number;
  id:number;
  title:string;
  completed:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class HttpViewService {

  constructor(private http:HttpClient) { }

  getInfo(){
    return this.http.get<messageRequest[]>("https://jsonplaceholder.typicode.com/todos")
  }
}
