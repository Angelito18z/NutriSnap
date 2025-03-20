import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NutriDataRoutingModule } from './nutri-data-routing.module';
import { NutriDataComponent } from './nutri-data.component';
import { NutriImagePipe } from './pipes/nutri-image.pipe';


@NgModule({
  declarations: [
    NutriDataComponent,
    NutriImagePipe
  ],
  imports: [
    CommonModule,
    NutriDataRoutingModule
  ],
  exports: [
    NutriDataComponent,
    NutriImagePipe
  ]
})
export class NutriDataModule { }
