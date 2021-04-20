import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.page.html',
  styleUrls: ['./driver.page.scss'],
})
export class DriverPage implements OnInit {

  orders = [];

  constructor(private _adminService: AdminServiceService) { }

  ngOnInit() {

    this._adminService.getOrder()
    .subscribe(data => this.orders = data);


  }

}
