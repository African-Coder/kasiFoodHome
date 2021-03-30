import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditVendorPage } from './edit-vendor/edit-vendor.page';
import { ViewVendorPage } from './view-vendor/view-vendor.page';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.page.html',
  styleUrls: ['./vendor.page.scss'],
})
export class VendorPage implements OnInit {

  shops = [
    {
      name:"Campus Eats",
      sales: 100,
      address: "Soshanguve Campus",
      status: "Active"
    }

  ]

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {
  }

  async  _openModal(shop) {

    const modal = await this.modalCtrl.create({
      component: ViewVendorPage,
      componentProps: {
        shop: shop
      }
    });

    return await modal.present();

  }

  async  _editModal(shop, index) {

    const modal = await this.modalCtrl.create({
      component: EditVendorPage,
      componentProps: {
        shop: shop
      }
    });

    return await modal.present();

  }

}
