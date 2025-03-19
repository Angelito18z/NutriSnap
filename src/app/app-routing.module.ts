import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth', //Ruta padre para autenticacion
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
  },
  
  {
    path: '', //Ruta padre(inicial) para cualquier otra ruta
    redirectTo: '/auth/login', //Redirecciona a la ruta login
    pathMatch: 'full', //Solo se redirecciona si la ruta es exactamente vacia
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
