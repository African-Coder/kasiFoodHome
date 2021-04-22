import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSPage } from './view-s.page';

const routes: Routes = [
  {
    path: '',
    component: ViewSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewSPageRoutingModule {}
