import { Component, OnInit } from '@angular/core';
import { ManageTodoService } from '../manage-todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list:any =[]

  constructor(private _managetodo : ManageTodoService) { }

  ngOnInit(): void {
    this._managetodo.getList().subscribe(
      (result) => {console.log(result) 
      this.list = result 
      
      }     
    )

    
  }

}
