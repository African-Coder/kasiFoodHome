import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { EditAdminPage } from './edit-admin/edit-admin.page';
import { ViewAdminPage } from './view-admin/view-admin.page';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.page.html',
  styleUrls: ['./super-admin.page.scss'],
})
export class SuperAdminPage implements OnInit {

  shops = [
    {
      name:"Kota Queens",
      sales: 10,
      address: "123 Soshanguve Block L",
      status: "Active"
    },
    {
      name:"Campus Eats",
      sales: 100,
      address: "Soshanguve Campus",
      status: "Active"
    }

  ];

  constructor(private modalCtrl: ModalController,
              private _AdminService: AdminServiceService) { }

  ngOnInit() {

     this._AdminService.getShops()
        .subscribe(data => this.shops = data);

  }

  async  _openModal(shop) {

    const modal = await this.modalCtrl.create({
      component: ViewAdminPage,
      componentProps: {
        shop: shop
      }
    });

    return await modal.present();

  }

  async  _editModal(shop, index) {

    const modal = await this.modalCtrl.create({
      component: EditAdminPage,
      componentProps: {
        shop: shop
      }
    });

    return await modal.present();

  }

}
