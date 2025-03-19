import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FoodCardComponent } from './food-card/food-card.component';
import { CameraCardComponent } from './camera-card/camera-card.component';
import { NutrientBarComponent } from './nutrient-bar/nutrient-bar.component';
import { TableContentsComponent } from './table-contents/table-contents.component';
import { ReviewCardComponent } from './review-card/review-card.component';

@NgModule({
  declarations: [
    FormComponent,
    NavbarComponent,
    FooterComponent,
    FoodCardComponent,
    CameraCardComponent,
    NutrientBarComponent,
    TableContentsComponent,
    ReviewCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FormComponent
  ]
})
export class ComponentsModule { }
