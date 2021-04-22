import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditSPageRoutingModule } from './edit-s-routing.module';

import { EditSPage } from './edit-s.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditSPageRoutingModule
  ],
  declarations: [EditSPage]
})
export class EditSPageModule {}
