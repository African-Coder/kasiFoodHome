import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewSPageRoutingModule } from './view-s-routing.module';

import { ViewSPage } from './view-s.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewSPageRoutingModule
  ],
  declarations: [ViewSPage]
})
export class ViewSPageModule {}
