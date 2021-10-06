import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASEURL, EndPoint } from 'src/app/tools/utils/ApiRoute/URL'
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _httpClient:HttpClient) { }


  GetAllOrders(){
    return this._httpClient.get(`${BASEURL}${EndPoint.products}`)
  }
}
