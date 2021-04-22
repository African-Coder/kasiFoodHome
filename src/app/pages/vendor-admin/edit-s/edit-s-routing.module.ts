import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditSPage } from './edit-s.page';

const routes: Routes = [
  {
    path: '',
    component: EditSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditSPageRoutingModule {}
