/** 
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular'

@Component({
  selector: 'app-view-s',
  templateUrl: './view-s.page.html',
  styleUrls: ['./view-s.page.scss'],
})
export class ViewSPage implements OnInit {
  shops :any;

  constructor(private viewShopCtrl : ModalController,
              private navParams : NavParams) {
    this.shops = navParams.get('shops');
   }

  ngOnInit() {
  }

  dismiss(){
    this.viewShopCtrl.dismiss();
  }

}
*/
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-view-s',
  templateUrl: './view-s.page.html',
  styleUrls: ['./view-s.page.scss'],
})
export class ViewSPage implements OnInit{

  shop:any;

  constructor(private viewVendorCtrl : ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.viewVendorCtrl.dismiss()
  }

}
