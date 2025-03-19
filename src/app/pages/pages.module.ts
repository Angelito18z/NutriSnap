import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ComponentsModule } from '../components/components.module';
import { HeroeComponent } from './landing/heroe/heroe.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HeroeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
