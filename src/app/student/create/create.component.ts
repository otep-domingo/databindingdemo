import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent  implements OnInit{

  form!:FormGroup;

  //create constructor to initialize
  constructor(
    public studenService: StudentService,
    private router: Router
  ){}

  //write the OnInit
  ngOnInit(): void {
    this.form=new FormGroup({
      studentId:new FormControl('',[Validators.required]),
      lastname: new FormControl('',Validators.required),
      firstname: new FormControl('',Validators.required),
      course: new FormControl('',Validators.required),
      dateEnrolled: new FormControl('',Validators.required)
    });
  }
  //core to return the response
  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value); //this optional just to check the values of the form in the console
    this.studenService.create(this.form.value).subscribe((res:any)=>{
      console.log('Student record created successfully!');
      this.router.navigateByUrl('student/index');
    })
  }
}
