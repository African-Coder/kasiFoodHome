/** 
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-s',
  templateUrl: './edit-s.page.html',
  styleUrls: ['./edit-s.page.scss'],
})
export class EditSPage implements OnInit {

  shops: any = [] ;

  constructor(private editShopCtrl: ModalController) { }

  ngOnInit() {
  }
 
  dismiss() {
    this.editShopCtrl.dismiss(this.shops)
  }

}
*/
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-edit-s',
  templateUrl: './edit-s.page.html',
  styleUrls: ['./edit-s.page.scss'],
})
export class EditSPage implements OnInit {

  shop:any;

  constructor(private editVendorCtrl: ModalController,
              private infoToast: ToastController,
              private _adminService: AdminService) { }

  ngOnInit() {

  this._adminService.updateShop(this.shop)
  .subscribe(data => this.shop = data);

  }

  async showToast() {
    const toast = await this.infoToast.create({
      message: 'Your settings have been saved',
      duration: 1000
    });
    toast.present();
  }

  update() {
    this.editVendorCtrl.dismiss() //dont forget to add this.vendor
  }

}