import { Component, OnInit } from '@angular/core';
import { Serve1Service } from '../serve1.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  public employees:any=[]

  constructor(private ep:Serve1Service) { }

  ngOnInit(): void {
    this.employees=this.ep.getEmployee()
  }

}
