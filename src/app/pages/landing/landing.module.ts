import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { HeroeComponents } from './heroe/heroe.component';


@NgModule({
  declarations: [
    HeroeComponents
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    ComponentsModule,
    
  ]
})
export class LandingModule { }
