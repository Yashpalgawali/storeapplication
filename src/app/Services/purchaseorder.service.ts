import { Injectable } from '@angular/core';
import { GlobalComponents } from '../GlobalComponents';
import { HttpClient } from '@angular/common/http';
import { PurchaseOrder } from '../Models/PurchaseOrder';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseorderService {

  base_url = GlobalComponents.base_url;
  app_url = this.base_url+"purchaseorder/"
  constructor(private http : HttpClient) { }

  public savePurchaseOrder( porder : any):Observable<PurchaseOrder> {
    
    return this.http.post<PurchaseOrder>(`${this.app_url}`,porder)
  }

  public getAllPurchaseOrders():Observable<PurchaseOrder[]> {
    return this.http.get<PurchaseOrder[]>(`${this.app_url}`) 
  }

  public getePurchaseOrderById(pid : number):Observable<PurchaseOrder> {
    return this.http.get<PurchaseOrder>(`${this.app_url}${pid}`)
  }

  public updatePurchaseOrder( porder : PurchaseOrder):Observable<PurchaseOrder> {
    return this.http.put<PurchaseOrder>(`${this.app_url}`,porder)
  }

 
}
