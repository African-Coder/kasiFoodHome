import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private _urlShop = 'http://localhost:3000/shops'

  constructor(private _http: HttpClient) { }

  getShops() : Observable<any> {
    return this._http.get<any>(this._urlShop)
  }

  // updateShop(shop: Shop) : Observable<void> {
  //   return this._http.put<void>(this._urlShop, shop, {
  //     headers: new HttpHeaders({
  //       'Conent-Type': 'application/json'
  //     })
  //   })
  // } 

}
