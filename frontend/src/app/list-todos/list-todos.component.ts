import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

export class Todo{
  constructor(
    public id : number,
    public description: string,
    public deadline: Date,
    public done:boolean){
    
  }
  
}



@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
todos =[ 
  new Todo(1,"dance",new Date(), false),
  new Todo(2,"paint",new Date(), false)]

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  

}
