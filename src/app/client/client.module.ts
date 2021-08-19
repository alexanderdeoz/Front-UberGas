import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
//PrimeNg Modules
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';

//components 
import {ClientRoutingModule} from './client-routing.module'


@NgModule({
  declarations: [RegistroComponent, LoginComponent, ForgotComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    CardModule,
    ButtonModule
   
  ]
})
export class ClientModule { }
