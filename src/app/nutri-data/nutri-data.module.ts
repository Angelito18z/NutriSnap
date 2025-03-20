import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NutriDataRoutingModule } from './nutri-data-routing.module';
import { NutriDataComponent } from './nutri-data.component';


@NgModule({
  declarations: [
    NutriDataComponent,
  ],
  imports: [
    CommonModule,
    NutriDataRoutingModule
  ]
})
export class NutriDataModule { }
