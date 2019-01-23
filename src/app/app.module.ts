//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule ,  Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpClientModule , HttpClient } from '@angular/common/http';

// services
import { TodayService } from './today.service';


/*************************** KENDO UI COMPONENTS *********************/ 
//Kendo buttons
import { ButtonsModule } from '@progress/kendo-angular-buttons';

// kendo inputs
// ( not all of them just the components we need in this project )
// import { InputsModule } from '@progress/kendo-angular-inputs';
import { NumericTextBoxModule } from '@progress/kendo-angular-inputs';
import { TextBoxModule } from '@progress/kendo-angular-inputs';

// kendo datepicker
// ( not all of them just the components we need in this project )
import { DatePickerModule } from '@progress/kendo-angular-dateinputs';
// kendo combo box
// ( not all of them just the components we need in this project )
import { ComboBoxModule } from '@progress/kendo-angular-dropdowns';


// kendo dialogs for windows maximize and minimize
import { DialogsModule } from '@progress/kendo-angular-dialog';

// kendo grid 
import { GridModule } from '@progress/kendo-angular-grid';

/**********************************************************************/

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { EmployeeComponent } from './employee/employee.component';

// navigation routes
const navigation:Routes=[
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"employee",
    component:EmployeeComponent,
    children: [
      {
         path: '', pathMatch: 'full', redirectTo: 'add-employee' 
      },

      {
        path:"add-employee",
        component:AddEmployeeComponent
      },
      {
        path:"search-employee",
        component:SearchEmployeeComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    SideMenuComponent,
    AddEmployeeComponent,
    SearchEmployeeComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonsModule,
    RouterModule.forRoot(navigation),
    BrowserAnimationsModule,
    DialogsModule,
    GridModule,
    NumericTextBoxModule,
    TextBoxModule,
    ComboBoxModule,
    DatePickerModule
      ],
  providers: [TodayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
