/** 
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.page.html',
  styleUrls: ['./edit-vendor.page.scss'],
})
export class EditVendorPage implements OnInit {

  vendor: any ;

  constructor(private editVendorCtrl : ModalController) { }

  ngOnInit() {
  }

  update()
  {
    this.editVendorCtrl.dismiss(this.vendor);

  }
  

}
*/
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-edit-vendor',
  templateUrl: './edit-vendor.page.html',
  styleUrls: ['./edit-vendor.page.scss'],
})
export class EditVendorPage implements OnInit {

  shop:any;

  constructor(private editAdminCtrl : ModalController,
              private infoToast : ToastController,
              private _adminService : AdminService) { }

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
