import { Component, OnInit } from '@angular/core';
import { Serve1Service } from '../serve1.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public employees:any=[]

  constructor(private ep1:Serve1Service) { }

  ngOnInit(): void {
    this.employees=this.ep1.getEmployee()
  }

}
