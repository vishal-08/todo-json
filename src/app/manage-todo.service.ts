import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManageTodoService {

  url = "http://localhost:3000/tasks"

  constructor(private _http : HttpClient) { }




  addTask(task : any){
    return this._http.post<any>(this.url, task)
  }



  getList(){
   
      return this._http.get(this.url)
   
  }

  currentData(id:any){
    return this._http.get(`${this.url}/${id}`)
  }

  deleteTodo(id:any, data:any){
    return this._http.put(`${this.url}/${id}`, data)
  }

  updateTodo(id:any, data:any){
    return this._http.put(`${this.url}/${id}`, data)
  }

  today() {
   
    var currentDate = new Date(new Date().getTime());
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
    var duedate = month + "/" + day + "/" + year
    return duedate
    // console.log(this.pickDate.nativeElement)
    console.log(duedate)
    // // dateEl.value = 10/12/2021
    // this.dateEl.nativeElement.value = "10/04/2021"

  }

  tomorrow() {
    var currentDate = new Date(new Date().getTime() + (24 * 60 * 60 * 1000));
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
    var duedate = month + "/" + day + "/" + year
    return duedate
    console.log(duedate)

  }
  nextWeek() {
    var currentDate = new Date(new Date().getTime() + (24 * 60 * 60 * 1000) * 7);
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
    var duedate = month + "/" + day + "/" + year
    return duedate
    console.log(duedate)
  }

  nextMonth() {
    var currentDate = new Date(new Date().getTime() + (24 * 60 * 60 * 1000) * 30);
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
    var duedate = month + "/" + day + "/" + year
    return duedate
    console.log(duedate)
  }
}
