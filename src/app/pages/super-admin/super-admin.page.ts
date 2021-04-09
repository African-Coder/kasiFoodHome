import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { EditAdminPage } from './edit-admin/edit-admin.page';
import { ViewAdminPage } from './view-admin/view-admin.page';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.page.html',
  styleUrls: ['./super-admin.page.scss'],
})
export class SuperAdminPage implements OnInit {

  id: number;

  shops = [
    {
      id: 1,
      name:"Kota Queens",
      sales: 10,
      address: "123 Soshanguve Block L",
      status: "Active"
    },
    {
      id: 2,
      name:"Campus Eats",
      sales: 100,
      address: "Soshanguve Campus",
      status: "Active"
    }

  ];

  constructor(private modalCtrl: ModalController,
              private _adminService: AdminServiceService,
              private alertModal: AlertController,
              private infoToast: ToastController) { }

  ngOnInit() {

    //calling service on initial load to show all shops in database

     this._adminService.getShops()
        .subscribe(data => this.shops = data);

  }

  

  //toast to confirm deleted item

  async showToast() {
    const toast = await this.infoToast.create({
      message: 'Item has been deleted',
      duration: 1000
    });
    toast.present();
  }
  

  //alert to confirm deletion of shop

  async presentAlertConfirm(shop) {
    const alert = await this.alertModal.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: '<strong>Are you sure you want to delete this shop ?</strong>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Okay',
          handler: () => {

              //service called to delete shop

              this._adminService.removeShop(shop.id)
              .subscribe(data => {
                console.log(data);
              });
          
              // calling toast to show item has been deleted

              this.showToast();
          }
        }
      ]
    });

    await alert.present();
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

  async  _editModal(shop) {

    const modal = await this.modalCtrl.create({
      component: EditAdminPage,
      componentProps: {
        shop: shop
      }
    });

    return await modal.present();

  }

}
