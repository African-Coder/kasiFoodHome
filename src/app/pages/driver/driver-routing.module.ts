import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverPage } from './driver.page';

const routes: Routes = [
  {
    path: '',
    component: DriverPage
  },
  {
    path: 'edit-driver',
    loadChildren: () => import('./edit-driver/edit-driver.module').then( m => m.EditDriverPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverPageRoutingModule {}
