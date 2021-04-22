import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { IShop } from 'src/app/services/shop';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private _urlShop = 'http://localhost:3000/allrestuarant';
  private _urlVendor = 'http://localhost:3000/vendor';
  private _urlOrder = 'http://localhost:3000/order';

  constructor(private _http: HttpClient) { }

  //superadmin get shops

  getShops() {
    return this._http.get<any>(this._urlShop)
  }

  //update shops for superadmin

  updateShop(shopData:any) {

    const id = 123456789;

    console.log( 
      shopData
      )
  

    return this._http.put(`${this._urlShop}/${id}`, shopData);

  }


  //delete shop for superadmin

  removeShop(id:any) {
    // const id: number = 1;
    const _urldel = 'http://localhost:3000/allrestuarant/' + id;

    return this._http.delete(_urldel);
  
  }


  //get vendor 

  getVendor() {
    return this._http.get<any>(this. _urlVendor);
  }

  //get orders

  getOrder() {
    return this._http.get<any>(this._urlOrder);
  }

}
