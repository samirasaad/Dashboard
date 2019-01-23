import { Component, OnInit } from '@angular/core';
import { TodayService } from '../today.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public today :string ;

  constructor(private todayDate: TodayService) { 
    this.today= this.todayDate.monthFunc() + "/" + this.todayDate.dayFunc() + "/" + this.todayDate.yearFunc(); 
  }
  
  ngOnInit() {
  }

}
