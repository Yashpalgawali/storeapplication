import { Injectable } from '@angular/core';
import { GlobalComponents } from '../GlobalComponents';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice_Product } from '../Models/Invoice_Product';

@Injectable({
  providedIn: 'root'
})
export class InvoiceproductService {

  base_url = GlobalComponents.base_url;
  app_url = this.base_url+"invoiceproduct/"
  
  constructor(private http : HttpClient) { }

  public deleteInvoiceProductById(prod_id : string):Observable<string> { 
   return this.http.delete<string>(`${this.app_url}delete/${prod_id}`)
  }

  public getInvoiceProductsByOrderId(order_id : number):Observable<Invoice_Product[]> {
    let ord_id  = ""+order_id
    return this.http.get<Invoice_Product[]>(`${this.app_url}${ord_id}`)
  }

  public addInvoiceProduct(invprod : Invoice_Product):Observable<Invoice_Product>{
    return this.http.post<Invoice_Product>(`${this.app_url}`,invprod)
  }
}
