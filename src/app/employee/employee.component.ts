import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  public allDepartments:Array<any>=[]; 
  //outside the constructor to be intialized once not every time the comp. intialized
  public intialEmployees :Array<object>=[
  {
    name:"samira",
    department:"finance",
    employeeCode:1,
    bDate: new Date(1990, 0, 1),
    gender:"female"
  },
  {
    name:"sara",
    department:"content",
    employeeCode:2,
    bDate: new Date(1977, 4, 1),
    gender:"female"
  },
  {
    name:"hasan",
    department:"architecture",
    employeeCode:3,
    bDate: new Date(1992, 8, 1),
    gender:"male"
  }
];
  constructor() { }
  storageIsEmpty(){
    if(localStorage.length==0){
      // add intial employees to local storage only if it was empty
      localStorage.setItem("intialEmployees",JSON.stringify(this.intialEmployees));
      //make the department list for the first time
      for(var i=0;i<this.intialEmployees.length;i++){
       this.allDepartments.push(this.intialEmployees[i]["department"]);
      }
      localStorage.setItem("allDepartments",JSON.stringify(this.allDepartments))
    }
    else{
     //get all stored data 
     this.intialEmployees=JSON.parse(localStorage.getItem("intialEmployees"));
     //get all stored departments 
     this.allDepartments=JSON.parse(localStorage.getItem("allDepartments"));
    }
  }
  ngOnInit() {
    this.storageIsEmpty();
  }

}
