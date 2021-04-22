import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http'; // step 1
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService { // class name

  
  constructor(private http: HttpClient) { }
  login_url = 'http://localhost:3000/';
  reg_url = 'http://localhost:3000/restu_register';
  shop_url = 'http://localhost:3000/allrestuarant';

  




  public getProfile()
  {
    return this.http.get<any>(this.login_url);
  }
  public getShops() {
    return this.http.get<any>(this.shop_url);
  }
  updateShop(shop:any) {
    return this.http.put<void>(`${this.reg_url}/${shop.id}`, shop, {
      headers: new HttpHeaders({
        'Conent-Type': 'application/json'
      })
    })
  } 
    //delete shop for superadmin

  removeShop(id:any) {
    // const id: number = 1;
    const _urldel = 'http://localhost:3000/restu_register/' + id;

    return this.http.delete(_urldel);
  
  }
  getVendor() {
    return this.http.get<any>(this. reg_url);
  } 
  public createProfile(addven:any)
  {
    return this.http.post<any>(this. reg_url, addven, {});
  }
 /* constructor(private httpClient: HttpClient) { }


  profile_url = 'http://localhost:3000/restu_register';  
  overview_url = 'http://localhost:6000/'; // check

  constructor(private httpClient: HttpClient) { }


getProfile()
{
  const headers = new Headers();
  headers.append('Content-Type','application/json');
  return this.httpClient.get(this.overview_url);
}

createProfile(createResource)
{
<<<<<<< HEAD
return this.httpClient.post(this.profile_url,createResource);
}


   const headers = new Headers();
  headers.append('Content-Type','application/json');
return this.httpClient.post(this.profile_url,createResource);
}
*/

//getRequestOptions(): RequestOptions {
//  const options = new RequestOptions();
 // options.headers = this.getProfile(); 

 // return options;
//}

 // get(url:string) { // this is a function

   // return this.http.get(url,this.getRequestOptions());
 // }

 // post(url:string, data:any) { // this is a function

    //return this.http.post(url,data, this.getRequestOptions());
 // }
}
// thats all you need inside the service.. now we are goin to use this service anywhere were it is required
