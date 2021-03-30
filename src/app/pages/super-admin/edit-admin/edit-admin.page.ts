import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.page.html',
  styleUrls: ['./edit-admin.page.scss'],
})
export class EditAdminPage implements OnInit {

  shop:any;

  constructor(private editAdminCtrl : ModalController,
              private infoToast : ToastController) { }

  ngOnInit() {
  }

  async showToast() {
    const toast = await this.infoToast.create({
      message: 'Your settings have been saved',
      duration: 1000
    });
    toast.present();
  }

  update() {
    this.editAdminCtrl.dismiss()
  }

}
