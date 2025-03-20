import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { HeroeComponents } from './heroe/heroe.component';
import { NutriDataModule } from '../../nutri-data/nutri-data.module';


@NgModule({
  declarations: [
    HeroeComponents
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    ComponentsModule,
    NutriDataModule
    
  ]
})
export class LandingModule { }
