import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { UsersComponent } from './users/users.component';
import { CitasComponent } from './citas/citas.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,

    children: [
      {path: 'users', component: UsersComponent},

      {path: 'quote', component: CitasComponent},
 
      {path: '**', redirectTo: 'users'}
   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
