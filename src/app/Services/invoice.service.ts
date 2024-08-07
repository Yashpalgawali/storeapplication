import { Injectable } from '@angular/core';
import { GlobalComponents } from '../GlobalComponents';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
  public getInvoiceById(vid : number):Observable<Invoice>
  {
    return this.http.get<Invoice>(`${this.app_url}${vid}`);
  }

  public getInvoiceProductsByOrderId(vid : number):Observable<Invoice[]>
  {
    return this.http.get<Invoice[]>(`${this.app_url}order/${vid}`);
  }
}
