import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

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
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse){
      if (error.status === 0) {
        console.error("Cannot connect");
      } else {
        console.error("Server Error");
      }
  
      return throwError(
        () => new Error("Error on request")
      );
    }
}
