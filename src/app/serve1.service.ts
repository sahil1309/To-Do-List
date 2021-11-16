import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Serve1Service {
  public employees=[
    {"name":"Aman","id":159,"dept":"CSE"},
    {"name":"Prapti","id":487,"dept":"ECE"},
    {"name":"Raj","id":89,"dept":"IT"}
  ]
getEmployee(){
  return this.employees
}

  constructor() { }
}
