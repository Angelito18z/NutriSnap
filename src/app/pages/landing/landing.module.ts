import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroe/heroe.component';
import { LandingRoutingModule } from './landing-routing.module';
import { ComponentsModule } from '../../components/components.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LandingRoutingModule,
    ComponentsModule,
  ]
})
export class LandingModule { }
