/** 
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AdminService } from 'src/app/services/admin.service';
import { EditSPage } from 'src/app/pages/vendor-admin/edit-s/edit-s.page';
import { ViewSPage } from 'src/app/pages/vendor-admin/view-s/view-s.page';


@Component({
  selector: 'app-vendor-admin',
  templateUrl: './vendor-admin.page.html',
  styleUrls: ['./vendor-admin.page.scss'],
})
export class VendorAdminPage implements OnInit {

  shops:any = []

  constructor(private modalCtrl: ModalController,
              private _adminService : AdminService) { }

  ngOnInit() {

    this._adminService.getProfile()
        .subscribe(data => this.shops = data);

  }

  async  _openModal(shop) {

    const modal = await this.modalCtrl.create({
      component: ViewSPage,
      componentProps: {
        shop: shop
      }
    });

    return await modal.present();

  }

  async  _editModal(shop, index) {

    const modal = await this.modalCtrl.create({
      component: EditSPage,
      componentProps: {
        shop: shop
      }
    });

    return await modal.present();

  }

}
*/
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AdminService } from 'src/app/services/admin.service';
import { EditSPage } from 'src/app/pages/vendor-admin/edit-s/edit-s.page';
import { ViewSPage } from 'src/app/pages/vendor-admin/view-s/view-s.page';
@Component({
  selector: 'app-vendor-admin',
  templateUrl: './vendor-admin.page.html',
  styleUrls: ['./vendor-admin.page.scss'],
})
export class VendorAdminPage implements OnInit {

  shops = [
    {
      name:"Campus Eats",
      sales: 1000,
      address: "Soshanguve Campus",
      status: "Active"
    }

  ]

  constructor(private modalCtrl : ModalController,
              private _adminService: AdminService) { }

  ngOnInit() {

    this._adminService.getVendor()
        .subscribe(data => this.shops = data);

  }

  async  _openModal(shop) {

    const modal = await this.modalCtrl.create({
      component: ViewSPage,
      componentProps: {
        shop: shop
      }
    });

    return await modal.present();

  }

  async  _editModal(shop, index) {

    const modal = await this.modalCtrl.create({
      component: EditSPage,
      componentProps: {
        shop: shop
      }
    });

    return await modal.present();

  }

}