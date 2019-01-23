import { Component, OnInit } from '@angular/core';
import {
  WindowService,
  WindowRef,
  WindowCloseResult
} from '@progress/kendo-angular-dialog';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public allWindowsOpened:boolean= true;
  public isDraggable: boolean = true;
  public isResizable:boolean=true;
  public height:20;
  public width:260;
  public windowsData=[
    {
      title:"Technical",
      windowId:0,
      isOpen:true,
      info:["html","html5","css","css3"],
      top:20,
      left:0    
    },
    {
      title:"Personal",
      windowId:1,
      isOpen:true,
      info:["self motivation","hard worker","self learning"],
      top:20,
      left:10 
    },
    {
     title:"Design",
      windowId:2,
      isOpen:true,
      info:["photoshop","illustrator","after effect"],
      top:235,
      left:0
 
   },
   {
     title:"Libraries",
      windowId:3,
     isOpen:true,
     info:["jquery","jquery ui","kendo ui"],     
     top:235,
     left:10
    }
  ];
  
constructor() { }
    public openAllWindows() {
      for(var i=0;i<this.windowsData.length;i++){
          if(this.windowsData[i].isOpen===false){
              this.windowsData[i].isOpen = true;
          }
      }
      this.allWindowsOpened=true;
    }

    public close(tabIndex:number) {
        this.windowsData[tabIndex].isOpen=false;
        console.log(tabIndex);
        this.allWindowsOpened=false;
      }

  ngOnInit() {
  }

}
