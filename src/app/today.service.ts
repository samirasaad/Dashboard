import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodayService {
  public fullDate;
  public today;

  constructor() {
  this.fullDate=new Date();
  }

  public getDateTime(){ 
   return this.fullDate=new Date();
  }
  public dayFunc(){
    
   return this.fullDate.getDate();
  }

  public yearFunc(){
    return this.fullDate.getFullYear();
   }

   public monthFunc(){
    return (this.fullDate.getMonth()+1);
   }

  public getTodayDate() {
  return this.monthFunc() + "/" + this.dayFunc() +  "/" + this.yearFunc();
  }
}
