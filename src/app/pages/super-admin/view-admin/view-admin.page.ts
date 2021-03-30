import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.page.html',
  styleUrls: ['./view-admin.page.scss'],
})
export class ViewAdminPage implements OnInit {

  shop:any;

  constructor(private viewAdminCtrl: ModalController) {

   }

  ngOnInit() {
  }

  dismiss() {
    this.viewAdminCtrl.dismiss(this.shop)
  }
  
}
