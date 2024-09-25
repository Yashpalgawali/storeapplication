import { Injectable } from '@angular/core';
import { GlobalComponents } from '../GlobalComponents';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { Invoice } from '../Models/Invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  base_url = GlobalComponents.base_url;
  app_url = this.base_url+"invoice/"
  constructor(private http : HttpClient) { }

  public saveInvoice(invoice : Invoice)
  {
    return this.http.post(`${this.app_url}`,invoice);
  }
  public getAllInvoices():Observable<Invoice[]>
  {
    return this.http.get<Invoice[]>(`${this.app_url}`);
  }
  public getInvoiceById(invoiceid : number):Observable<Invoice>
  {
    return this.http.get<Invoice>(`${this.app_url}${invoiceid}`);
  }

  public getInvoiceProductsByOrderId(orderid : number):Observable<Invoice[]>
  {
    return this.http.get<Invoice[]>(`${this.app_url}order/${orderid}`);
  }

  public updateInvoiceById(invoice : Invoice):Observable<Invoice>
  {
    return this.http.put<Invoice>(`${this.app_url}`,invoice)
  }
}
