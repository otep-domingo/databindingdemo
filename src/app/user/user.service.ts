import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = "https://localhost:7247/api/";


  //headers options
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  //constructor
  constructor(private httpClient:HttpClient) { }

  //return response
  getAll():Observable<any>{
    return this.httpClient.get(this.apiURL+'User/GetUsers')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  /** 
   * Write code on Method
   *
   * @return response()
   */
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
  
}
