import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendorPage } from './vendor.page';

const routes: Routes = [
  {
    path: '',
    component: VendorPage
  },
  {
    path: 'view-vendor',
    loadChildren: () => import('./view-vendor/view-vendor.module').then( m => m.ViewVendorPageModule)
  },
  {
    path: 'edit-vendor',
    loadChildren: () => import('./edit-vendor/edit-vendor.module').then( m => m.EditVendorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorPageRoutingModule {}
