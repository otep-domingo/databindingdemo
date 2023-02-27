import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import{FormsModule} from '@angular/forms';
import { SimplecalculatorComponent } from './simplecalculator/simplecalculator.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Error404Component } from './error404/error404.component';
import { TabledemoComponent } from './tabledemo/tabledemo.component';
import { DisplaytableComponent } from './displaytable/displaytable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SampleformsComponent } from './sampleforms/sampleforms.component';


import { HttpClientModule } from '@angular/common/http';

import { StudentModule } from './student/student.module';


@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    SimplecalculatorComponent,
    LoginComponent,
    NavbarComponent,
    Error404Component,
    TabledemoComponent,
    DisplaytableComponent,
    SampleformsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    StudentModule
  ],
  exports:[
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
