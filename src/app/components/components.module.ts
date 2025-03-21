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
import { SocialMediaComponent } from './social-media/social-media.component';
import { MaterialModule } from '../material/material.module';
import { DialogComponent } from './dialog/dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogUserComponent } from './dialog-user/dialog-user.component';

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
    DialogComponent,
    LoadingBarComponent,
    SocialMediaComponent,
    DialogUserComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    FormComponent,
    NavbarComponent,
    FooterComponent,
    FoodCardComponent,
    TableContentsComponent,
    ReviewCardComponent,
    CameraCardComponent,
    QuienesSomosComponent,
    DialogComponent,
    DialogUserComponent
  ]
})
export class ComponentsModule { }