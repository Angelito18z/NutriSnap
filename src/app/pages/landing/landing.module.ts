import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { HeroeComponent } from './heroe/heroe.component';



@NgModule({
  declarations: [
    HeroeComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    ComponentsModule,
    
  ]
})
export class LandingModule { }
