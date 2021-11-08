import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ManageTodoService } from '../manage-todo.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @ViewChild('pickDate', { static: true })
  pickDate!: ElementRef;
  // @ViewChild('detail')  detail!: ElementRef

  taskForm!: FormGroup ;
  

  constructor(private _router : Router, private _managetodo : ManageTodoService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      'title': new FormControl(null, Validators.required, ),
      'detail': new FormControl(null, Validators.required),
      'dueDate': new FormControl(null, Validators.required),
      'createdAt' :new FormControl(new Date()) ,
      'status' : new FormControl('TODO'),
      'modifiedAt' : new FormControl(null),
      id : new FormControl(null)
    })
  }

  // get title() {
  //   return (this.taskForm.get('title'))
  // }

  createTaskForm() {
    // this.list = this._managetodo.getList()
   
  }

  onSave(){
    this._managetodo.addTask(this.taskForm.value).subscribe(
      data => console.log('success', data),
      error => console.error('error',error)
      
    )
    this.taskForm.patchValue({
      title : "",
      detail : "",
      dueDate : ""
    }) 
  }

  
  
  
  onCancel() {
    this._router.navigate(['/home'])
  }






  today() {
    const latestDate  = this._managetodo.today()
    
    this.taskForm.patchValue({
      dueDate : latestDate
    })
  }

  tomorrow() {
    const latestDate  = this._managetodo.tomorrow()
    
    this.taskForm.patchValue({
      dueDate : latestDate
    })

  }
  nextWeek() {
    const latestDate  = this._managetodo.nextWeek()
    
    this.taskForm.patchValue({
      dueDate : latestDate
    })
  }

  nextMonth() {
    const latestDate  = this._managetodo.nextMonth()
    
    this.taskForm.patchValue({
      dueDate : latestDate
    })
  }

}
