/*
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.page.html',
  styleUrls: ['./super-admin.page.scss'],
})
export class SuperAdminPage implements OnInit {
  doughnutChart: any;
  lineChart: any;


  constructor() { }
  segment = 0;
  selectedSlide: any;
  sliderOptions = {
    initialSlide : 0,
    slidesPerView: 1,
    speed: 400,
  };


  items = ['apple', 'banana', 'cherry', 'apple', 'banana', 'cherry'];

  @ViewChild('barCanvas',  { static: true }) barCanvas: ElementRef;
  @ViewChild('doughnutCanvas',  { static: true }) doughnutCanvas: ElementRef;
  @ViewChild('lineCanvas',  { static: true }) lineCanvas: ElementRef;


  private barChart: Chart;


  unread() {

    console.log('my test works');

  }
  test() {
    console.log('my test works');
  }

  delete() {
    console.log('my delete works');
  }

  ngOnInit() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Mamas Kitchen', 'Nkukhu Box', 'KFC', 'Chicken Licken', 'Nandos', 'Kasi Krumps'],
        datasets: [
          {
            label: '# Based on Restaurant Order Volume',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });

    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Spathlo', 'Skopo', 'Pap And Wors', 'Zinger Bucket', 'Marapo', 'Mogodu'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB', '#FFCE56']
          }
        ]
      }
    });

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ],
        datasets: [
          {
            label: 'System User Activity',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 45, 54, 72, 64, 88, 74],
            spanGaps: false
          }
        ]
      }
    });
  }

  async segmentChanged() {
    await this.selectedSlide.slideTo(this.segment);

  }

  async slideChanged(slides: IonSlides) {
    this.selectedSlide = slides;
    slides.getActiveIndex().then(selectedIndex => {
      this.segment = selectedIndex;
    });
  }

}*/
/** 
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';;

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.page.html',
  styleUrls: ['./super-admin.page.scss'],
})

export class SuperAdminPage implements OnInit {

  vendor:any;

  constructor(navParams: NavParams, private viewVendorCtrl: ModalController) {

    this.vendor = navParams.get('');

   }

  ngOnInit() {
  }

  dismiss() {
    this.viewVendorCtrl.dismiss();
  }

}
**/
/** 
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
//import { ModalComponent } from 'src/app/components/modal/modal.component';
import { ViewVendorPage } from 'src/app/pages/super-admin/view-vendor/view-vendor.page';
import { EditVendorPage } from 'src/app/pages/super-admin/edit-vendor/edit-vendor.page';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.page.html',
  styleUrls: ['./super-admin.page.scss'],
})
export class SuperAdminPage implements OnInit {

  vendors = [
    {
      name: "KFC",
      type: "Active",
      customers: 10
    },
    {
      name: "Nandos",
      type: "Active",
      customers: 16
    },
    {
      name: "Nkuku Box",
      type: "Active",
      customers: 20
    },
    {
      name: "Debonair's Pizza",
      type: "Pending",
      customers: 0
    }

  ];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

 async  _openModal(vendor) {

    const modal = await this.modalCtrl.create({
      component: ViewVendorPage,
      componentProps: {
        vendor: vendor
      }
    });

    return await modal.present();

  }

  async  _editModal(vendor, index) {

    const modal = await this.modalCtrl.create({
      component: EditVendorPage,
      componentProps: {
        vendor: vendor
      }
    });

    // modal.onDidDismiss().then(data=> {
    //   this.vendors[index]=data.data;
    //   console.log(data);
    //});

    return await modal.present();

  }
}
**/
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { AdminService } from 'src/app/services/admin.service';
import { ViewVendorPage } from 'src/app/pages/super-admin/view-vendor/view-vendor.page';
import { EditVendorPage } from 'src/app/pages/super-admin/edit-vendor/edit-vendor.page';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.page.html',
  styleUrls: ['./super-admin.page.scss'],
})
export class SuperAdminPage implements OnInit {

  id: number;
  restuarants:any = [];


  constructor(private modalCtrl: ModalController,
              private _adminService: AdminService,
              private alertModal: AlertController,
              private infoToast: ToastController) { }

  ngOnInit() {

    //calling service on initial load to show all shops in database

    //  this._adminService.getShops()
    //     .subscribe(data => this.restuarants = data);
    this.getShops();

  }
  //get shops
  getShops(){
    this._adminService.getShops().subscribe((data:any)=>this.restuarants=data)
  }
  

  //toast to confirm deleted item

  async showToast(shop) {
    const toast = await this.infoToast.create({
      message: shop.name + ' has been deleted',
      duration: 1500
    });
    toast.present();
  }
  

  //alert to confirm deletion of shop

  async presentAlertConfirm(shop) {
    const alert = await this.alertModal.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: '<strong>Are you sure you want to delete ' + shop.name + ' ?</strong>' ,
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

              this.showToast(shop);
          }
        }
      ]
    });

    await alert.present();
  }

  //opens modal to create page to view shop

  async  _openModal(shop) {

    const modal = await this.modalCtrl.create({
      component: ViewVendorPage,
      componentProps: {
        shop: shop
      }
    });

    return await modal.present();

  }

  //opens modal to edit page to change shop attibutes

  async  _editModal(shop) {

    const modal = await this.modalCtrl.create({
      component: EditVendorPage,
      componentProps: {
        shop: shop
      }
    });

    return await modal.present();

  }

}