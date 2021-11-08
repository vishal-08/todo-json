import { Component, OnInit } from '@angular/core';
import { ManageTodoService } from '../manage-todo.service';
import { DatePipe } from '@angular/common'
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list : any = []
  

  constructor(private _managetodo : ManageTodoService, public datepipe: DatePipe, private route : ActivatedRoute) { }

  
  ngOnInit(): void {
    this.getTaskList()
    
    
  }


  getTaskList(){
    this._managetodo.getList().subscribe(
      (result) => {console.warn(result)
        this.list = result
        
      }
    )
  }


  deleteTodo(id:any){
    
    console.log(id)
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.list, event.previousIndex, event.currentIndex);
    const prevIndex = event.previousIndex
    const currentIndex = event.currentIndex
    console.log(prevIndex)
    console.log(currentIndex)
  }
}
