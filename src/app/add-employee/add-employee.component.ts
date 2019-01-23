import { Component, OnInit } from '@angular/core';
// import { $ } from 'protractor';
import { TodayService } from '../today.service'

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  public x;
  public allowCustom:boolean = true;
  public positiveCode:boolean = true;
  public employeeCodeUnique:boolean = true;
  public validBDate:boolean=true;
  public today;
  public employee:object;
  
  //outside the constructor to be intialized once not every time the comp. intialized
  public allDepartments:Array<any>=[];
  public intialEmployees:Array<object>=[];

  constructor( private todayDate: TodayService ) {
   this.today=this.todayDate.getDateTime(); 
   this.employee={
    name:"",
    department:"",
    employeeCode:1,
    bDate:this.today,
    gender:"male"
  };
  }

   checkIfDepExist(){
    if(this.allDepartments.indexOf(this.employee["department"])==-1){
        this.allDepartments.push(this.employee["department"]);
        //console.log("not exist before");
        localStorage.setItem("allDepartments",JSON.stringify(this.allDepartments));    
    }
   }
   
   addEmployee(data){
    this.positiveCode=true;
    this.employeeCodeUnique=true;
    this.validBDate=true;
    if(data){
    //1- capture inputs values
    this.employee={
      name:this.employee["name"],
      department:this.employee["department"],
      employeeCode:this.employee["employeeCode"],
      bDate:this.employee["bDate"],
      gender:this.employee["gender"]
    }
    //2- check employee data before adding them 
        //2.1 employee code accepts +ve nums only
          if(this.employee["employeeCode"] <=0){
              console.log(this.employee["employeeCode"]);
              this.positiveCode=false;
          }
         //2.2 employee code should exist once
          for(var i=0;i<this.intialEmployees.length;i++){
              if(this.intialEmployees[i]["employeeCode"] == this.employee["employeeCode"] ){
                  this.employeeCodeUnique=false;
              }
          }
          //2.3 dont accept date from 2000 or greater as birthdate 
            if(this.employee["bDate"].getFullYear() >= 2000){
                 this.validBDate=false;
             }
         
         if( this.positiveCode && this.employeeCodeUnique && this.validBDate){
            /**with every extra employee should **/
                // 1-be pushed to the original array
             this.intialEmployees.push(this.employee);

            //2-be stored in localstorage
             localStorage.setItem("intialEmployees",JSON.stringify(this.intialEmployees));
        
    //3-check if department exist, if no, push department to departments list ,then store in localstorage   
      this.checkIfDepExist();
      }
     }
    }
    
    cancel(){
     this.employee={
        name:"",
        department:"",
        employeeCode:1,
        bDate:this.today,
        gender:"male"
      };
    }
  ngOnInit() {
     // localStorage.clear();
     this.intialEmployees=JSON.parse(localStorage.getItem("intialEmployees"));
     this.allDepartments=JSON.parse(localStorage.getItem("allDepartments"));    
    
  }

}
