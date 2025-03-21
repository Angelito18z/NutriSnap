import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroeComponents } from './heroe/heroe.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'heroe',  
    pathMatch: 'full',
  },
  {
    path: 'heroe',
    component: HeroeComponents,  
  },
  {
    path: '**',
    redirectTo: 'heroe', 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
