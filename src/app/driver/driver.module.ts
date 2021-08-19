import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import {DriverRoutingModule} from './driver-routing.module'
//PrimeNg Modules
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [RegistroComponent, LoginComponent, ForgotComponent],
  imports: [
    CommonModule,
    DriverRoutingModule,
    CardModule,
    ButtonModule
  ]
})
export class DriverModule { }
