import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentInsert } from '../student';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Courses } from '../courses';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  //styleUrls: ['./edit.component.css']
  styleUrls:['../../app.component.css']
})
export class EditComponent implements OnInit{

id!:number;
student!:StudentInsert;
form!:FormGroup;
courses:Courses[]=[];
//constructor
constructor(
  public studentService:StudentService,
  private route:ActivatedRoute,
  private router:Router
){
  this.GetCourses();
}

ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  console.log("student id: "+this.id);
  this.studentService.find(this.id).subscribe((data:StudentInsert)=>{
    this.student = data;
    console.log("student date: " + this.student);
  });

  //validate
  this.form=new FormGroup({
    studentId:new FormControl('',[Validators.required]),
    lastname: new FormControl('',Validators.required),
    firstname: new FormControl('',Validators.required),
    courseId: new FormControl('',Validators.required),
    dateEnrolled: new FormControl('',Validators.required)
  });
}

GetCourses(){
  this.studentService.getAllCourses().subscribe(
    data=>this.courses = data
  );
}


get f(){
  return this.form.controls;
}

submit(){
  console.log(this.form.value);//optional if you want to see the values in the browser console
  this.studentService.update(this.id, this.form.value).subscribe((res:any)=>{
    console.log('Student updated successfully');
    this.router.navigateByUrl('student/index'); //return to index when record has been saved.
  })
}

}
