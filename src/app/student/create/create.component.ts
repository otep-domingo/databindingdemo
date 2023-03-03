import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Courses } from '../courses';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent  implements OnInit{

  form!:FormGroup;
  courses:Courses[]=[];
  //create constructor to initialize
  constructor(
    public studenService: StudentService,
    private router: Router
  ){
    this.GetCourses();
  }

  //write the OnInit
  ngOnInit(): void {
    this.form=new FormGroup({
      studentId:new FormControl('',[Validators.required]),
      lastname: new FormControl('',Validators.required),
      firstname: new FormControl('',Validators.required),
      //course: new FormControl('',Validators.required),
      courseId:new FormControl(''),
      dateEnrolled: new FormControl('',Validators.required)
    });
  }
  //core to return the response
  get f(){
    return this.form.controls;
  }

  GetCourses(){
    this.studenService.getAllCourses().subscribe(
      data=>this.courses = data
    );
  }

  submit(){
    console.log(this.form.value); //this optional just to check the values of the form in the console
    this.studenService.create(this.form.value).subscribe((res:any)=>{
      console.log('Student record created successfully!');
      this.router.navigateByUrl('student/index');
    })
  }
}
