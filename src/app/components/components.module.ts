import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { FoodCardComponent } from './food-card/food-card.component';
import { NutrientBarComponent } from './nutrient-bar/nutrient-bar.component';
import { TableContentsComponent } from './table-contents/table-contents.component';
import { ReviewCardComponent } from './review-card/review-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CameraCardComponent } from './camera-card/camera-card.component';

@NgModule({
  declarations: [
    FormComponent,
    NavbarComponent,
    FooterComponent,
    FoodCardComponent,
    NutrientBarComponent,
    TableContentsComponent,
    ReviewCardComponent,
    CameraCardComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [
    FormComponent,
    NavbarComponent,
    FooterComponent,
    FoodCardComponent,
    NutrientBarComponent,
    TableContentsComponent,
    ReviewCardComponent,
    CameraCardComponent
  ]
})
export class ComponentsModule { }