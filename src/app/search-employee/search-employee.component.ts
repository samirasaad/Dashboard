import { Component, OnInit , ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchEmployeeComponent implements OnInit {
public allowCustom:boolean = true;  
public employeeNameisFound:boolean=true;
public employeeDepisFound:boolean=true;
public allEmployees:Array<object>;
public foundemployeeList:Array<object>=[];
public allDepartments:Array<any>=[];
public namesArray:Array<any>=[];
public deprtsArray:Array<any>=[];
public searchEmployee:object={
  name:"",
  department:""
}; 

public selectableSettings:object;
  constructor() {
      this.selectableSettings = {
      selectable:true,
      mode:"multiple"
  };
   }
  
   search(data){
      this.employeeDepisFound=true;
      this.employeeNameisFound=true;
      this.searchEmployee={
      name:this.searchEmployee["name"],
      department:this.searchEmployee["department"]
    }
     console.log(this.searchEmployee);
        if(data ){
          this.foundemployeeList = this.allEmployees.filter((obj) => {
          return (obj["name"] == this.searchEmployee["name"] && obj["department"] == this.searchEmployee["department"]);
          }) ;
          this.namesArray = this.allEmployees.filter((obj) => {
            return (obj["name"] == this.searchEmployee["name"]);
          }) ;
          this.deprtsArray = this.allEmployees.filter((obj) => {
            return (obj["department"] == this.searchEmployee["department"]);         
          }) ;

          if(this.namesArray.length==0){
            this.employeeNameisFound=false;
          }

          if(this.deprtsArray.length==0){
            this.employeeDepisFound=false;
          }
          console.log(this.employeeNameisFound);
        }
   }
  ngOnInit() {
    this.allEmployees=JSON.parse(localStorage.getItem("intialEmployees"));
    this.allDepartments=JSON.parse(localStorage.getItem("allDepartments"));    
  }

}
