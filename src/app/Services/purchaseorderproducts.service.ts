import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalComponents } from '../GlobalComponents';
import { PurchaseOrderProducts } from '../Models/PurchaseOrderProducts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseorderproductsService {

  base_url = GlobalComponents.base_url;
  app_url = this.base_url+"purchaseorderproduct/"
  constructor(private http : HttpClient) { }

  public savePurchaseOrderProducts(poprod : PurchaseOrderProducts):Observable<PurchaseOrderProducts>
  {
   return this.http.post<PurchaseOrderProducts>(`${this.app_url}`,poprod);
  }

  public getPurchaseOrderProductsByTempId(tempid : number):Observable<PurchaseOrderProducts[]>
  {
   return  this.http.get<PurchaseOrderProducts[]>(`${this.app_url}${tempid}`);
  }
}
