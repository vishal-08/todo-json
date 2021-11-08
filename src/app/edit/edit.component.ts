
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common'
import { ManageTodoService } from '../manage-todo.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  list:any = []

  editForm = new FormGroup({
    'title': new FormControl(null, Validators.required, ),
    'detail': new FormControl(null, Validators.required),
    'dueDate': new FormControl(null, Validators.required),
    'createdAt' :new FormControl(new Date()) ,
    'status' : new FormControl('TODO'),
    'modifiedAt' : new FormControl(null),
    id : new FormControl(null)
  })

  constructor(private _router : Router, private _managetodo : ManageTodoService, private route :ActivatedRoute,public datepipe: DatePipe ) { }

  

  ngOnInit(): void {
    const id = this.route.snapshot.params.id
    this._managetodo.currentData(id).subscribe((result) =>{
      this.list = result
      this.editForm = new FormGroup({
        'title': new FormControl(this.list.title),
        'detail': new FormControl(this.list.detail),
        'createdAt' :new FormControl(this.list.createdAt),
        'modifiedAt' : new FormControl(new Date()),
        'dueDate': new FormControl(this.list.dueDate ),
         'status' : new FormControl('TODO') 
      })
      console.log()
    })
  }
 
  

  update(){
   
    this._managetodo.updateTodo(this.route.snapshot.params.id, this.editForm.value).subscribe((result) => {
      console.log(result,"updated")
      this._router.navigate(['/home'])
    })
  
  }

  onCancel(){
    this._router.navigate(['/home'])
  }

}
