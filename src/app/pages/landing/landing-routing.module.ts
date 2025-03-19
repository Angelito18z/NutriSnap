import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroeComponent } from './heroe/heroe.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'heroe',  
    pathMatch: 'full',
  },
  {
    path: 'heroe',
    component: HeroeComponent,  
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
