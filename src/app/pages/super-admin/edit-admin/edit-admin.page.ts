import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.page.html',
  styleUrls: ['./edit-admin.page.scss'],
})
export class EditAdminPage implements OnInit {

  shop:any;

  constructor(private editAdminCtrl : ModalController,
              private infoToast : ToastController,
              private _adminService : AdminServiceService) { }

  ngOnInit() {
  }

  async showToast(shop) {
    const toast = await this.infoToast.create({
      message: 'Your settings have been saved for: ' + shop.name,
      duration: 1500
    });
    toast.present();
  }


  update() {

    this._adminService.updateShop(this.shop)
        .subscribe(data => this.shop = data);

    this.editAdminCtrl.dismiss()
  }

}
