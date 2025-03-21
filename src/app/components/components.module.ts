import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { FoodCardComponent } from './food-card/food-card.component';
import { TableContentsComponent } from './table-contents/table-contents.component';
import { ReviewCardComponent } from './review-card/review-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CameraCardComponent } from './camera-card/camera-card.component';
import { MatButtonModule } from '@angular/material/button';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { MatTableModule } from '@angular/material/table';
import { LoadingBarComponent } from './loading-bar/loading-bar.component';
import { FruitCardComponent } from './fruit-card/fruit-card.component';

@NgModule({
  declarations: [
    FormComponent,
    NavbarComponent,
    FooterComponent,
    FoodCardComponent,
    TableContentsComponent,
    ReviewCardComponent,
    CameraCardComponent,
    QuienesSomosComponent,
    LoadingBarComponent,
    FruitCardComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
  ],
  exports: [
    FormComponent,
    NavbarComponent,
    FooterComponent,
    FoodCardComponent,
    TableContentsComponent,
    ReviewCardComponent,
    CameraCardComponent,
    QuienesSomosComponent

  ]
})
export class ComponentsModule { }
