import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{
  students: Student[] = [];
  constructor(public studentService: StudentService){}

  ngOnInit():void{
    this.studentService.getAll().subscribe((data:Student[])=>{
      this.students = data;
      console.log(this.students);
    })
  }

  //delete record based on id
  deleteStudent(id:number){
    this.studentService.delete(id).subscribe(res=>{
      this.students = this.students.filter(item=>item.id!==id);
      console.log("Student deleted successfully");
    })
  }
}
