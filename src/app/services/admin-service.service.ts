import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { IShop } from 'src/app/services/shop';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private _urlShop = 'http://localhost:3000/shops';
  private _urlVendor = 'http://localhost:3000/vendor';

  constructor(private _http: HttpClient) { }

  //superadmin get shops

  getShops() {
    return this._http.get<any>(this._urlShop)
  }

  //update shops for superadmin

  updateShop(shop:any) {
    return this._http.put<void>(`${this._urlShop}/${shop.id}`, shop, {
      headers: new HttpHeaders({
        'Conent-Type': 'application/json'
      })
    })
  } 

  //delete shop for superadmin

  removeShop(id:any) {
    // const id: number = 1;
    const _urldel = 'http://localhost:3000/shops/' + id;

    return this._http.delete(_urldel);
  
  }


  //get vendor 

  getVendor() {
    return this._http.get<any>(this. _urlVendor);
  }

}
