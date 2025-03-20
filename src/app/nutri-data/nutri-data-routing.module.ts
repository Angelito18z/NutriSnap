import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NutriDataComponent } from './nutri-data.component';

const routes: Routes = [{ path: '', component: NutriDataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NutriDataRoutingModule { }
