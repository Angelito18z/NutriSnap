import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MaterialModule } from '../../material/material.module';
import { UsersComponent } from './users/users.component';
import { ComponentsModule } from '../../components/components.module';
import { CitasComponent } from './citas/citas.component';
@NgModule({
  declarations: [
    LayoutComponent,
    UsersComponent,
    CitasComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule ,
    MaterialModule,
    ComponentsModule
  ]
})
export class AdminModule { }
