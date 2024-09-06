import { Injectable } from '@angular/core';
import { GlobalComponents } from '../GlobalComponents';
import { HttpClient } from '@angular/common/http';
import { Temp_Invoice } from '../Models/Temp_Invoice';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TempinvoiceService {

  base_url = GlobalComponents.base_url;
  app_url = this.base_url+"tempinvoice/"
  
  constructor(private http : HttpClient) { }

  public saveTempInvoice(Invoice : Temp_Invoice):Observable<Temp_Invoice[]>
  {
    return this.http.post<Temp_Invoice[]>(`${this.app_url}`,Invoice);
  }
 
  public getTempInvoiceById(vid : number):Observable<Temp_Invoice>
  {
    return this.http.get<Temp_Invoice>(`${this.app_url}${vid}`);
  }

  public getTempInvoicesbyTempInvoiceId(tid : number):Observable<Temp_Invoice[]>
  {
    return this.http.get<Temp_Invoice[]>(`${this.app_url}${tid}`);
  }

  public deleteTempInvoiceProductById(prod_id : string):Observable<string>
  {
    return this.http.delete<string>(`${this.app_url}removeitem/${prod_id}`);
  }

}
