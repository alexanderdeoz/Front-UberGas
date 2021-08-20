import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router'

import { ForgotComponent } from './pages/forgot/forgot.component';
import { ListComponent } from './pages/list/list.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';


const routes :Routes=[
  {
    path:'',
    children:[
      {path:'forgot',component:ForgotComponent},
      {path:'login' ,component:LoginComponent},
      {path:'registro',component:RegistroComponent},
      {path:'listado',component:ListComponent},
      {path:'**' ,redirectTo:'login'}
    ]
  }
];
@NgModule({

  imports: [
  RouterModule.forChild(routes)
  ]
})
export class DriverRoutingModule { }
