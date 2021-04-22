import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.page.html',
  styleUrls: ['./edit-admin.page.scss'],
})
export class EditAdminPage implements OnInit {

  shopData:any;

  constructor(private editAdminCtrl : ModalController,
              private infoToast : ToastController,
              private _adminService : AdminServiceService) { }

  ngOnInit() {
  }

  async showToast(shopData) {
    const toast = await this.infoToast.create({
      message: 'Your settings have been saved for: ' + shopData.restuarant_name,
      duration: 1500
    });
    toast.present();
  }




  update() {

    this._adminService.updateShop(this.shopData)
        .subscribe(data => this.shopData = data);

        //console.log('ID' + this.shopData.value.id);

    this.editAdminCtrl.dismiss()
    
  }

}
