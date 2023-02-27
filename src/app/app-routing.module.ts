import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimplecalculatorComponent } from './simplecalculator/simplecalculator.component';
import { LoginComponent } from './login/login.component';
import { Error404Component } from './error404/error404.component';
import {TabledemoComponent} from './tabledemo/tabledemo.component';
import { DisplaytableComponent } from './displaytable/displaytable.component';
import { IndexComponent } from './user/index/index.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'simplecalculator',component:SimplecalculatorComponent},
  {path:'tabledemo',component:TabledemoComponent},
  {path:'displaytable',component:DisplaytableComponent},
  //{path:'**',component:Error404Component},
  {path: 'user/index', component:IndexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
