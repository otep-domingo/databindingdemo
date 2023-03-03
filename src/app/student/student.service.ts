import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

import { Student, StudentInsert } from './student';
import { Courses } from './courses';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiURL = "https://localhost:7247/api/Students/";
  private courseUrl = "https://localhost:7247/api/Courses/"
  //define the header options
  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  constructor(private httpClient:HttpClient) { }
  //getting all the records
  getAll():Observable<any>{
    return this.httpClient.get(this.apiURL + 'GetStudents')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  //create method
  create(student:StudentInsert):Observable<any>{
    return this.httpClient.post(this.apiURL+'InsertStudent/',JSON.stringify(student),this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  //edit method
  update(id:number, student:Student):Observable<any>{
    return this.httpClient.put(this.apiURL + "UpdateStudent/" + id, JSON.stringify(student),this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  //delete method
  delete(id:number){
    return this.httpClient.delete(this.apiURL + "DeleteStudent/" + id,this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  //search
  find(id:number):Observable<any>{
    console.log("find #: " + this.apiURL + "GetStudentById/" + id);
    return this.httpClient.get(this.apiURL + "GetStudentById/" + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

/////this part is for the course
/////follow the example in getAll() for student

getAllCourses():Observable<any>{
  return this.httpClient.get(this.courseUrl + 'GetCourses')
  .pipe(
    catchError(this.errorHandler)
  )
}


  //error handler
  errorHandler(error:any){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      errorMessage = 'Error code: ${error.status}\nMessage: ${error.message}';
    }
    return throwError(errorMessage);
  }
}
