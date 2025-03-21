import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth', //Ruta padre para autenticacion
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule),
  },

  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: '', //Ruta padre(inicial) para cualquier otra ruta
    redirectTo: '/landing', //Redirecciona a la ruta login
    pathMatch: 'full', //Solo se redirecciona si la ruta es exactamente vacia
  },
  { path: 'nutriData', loadChildren: () => import('./nutri-data/nutri-data.module').then(m => m.NutriDataModule) },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
